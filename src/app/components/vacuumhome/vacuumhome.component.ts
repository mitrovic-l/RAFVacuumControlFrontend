import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Vacuum } from 'src/app/model';
import { VacuumService } from 'src/app/services/vacuum.service';

@Component({
  selector: 'app-vacuumhome',
  templateUrl: './vacuumhome.component.html',
  styleUrls: ['./vacuumhome.component.css']
})
export class VacuumhomeComponent implements OnInit{

  vacuums: Vacuum[]
  selectedVacuum: any = null;
  selectedVacuumStatus: string = ''
  currentRoles: string[] = [];
  selectedDate: string = ''
  selectedTime: string = ''
  selectedStatus: string = ''
  constructor(private vacuumService: VacuumService){
    this.vacuums = [];
  }
  ngOnInit(): void {
    this.vacuumService.getVacuums().subscribe( data => {
      console.log("Uhvatio nesto...");
      console.log(JSON.stringify(data));
      this.vacuums = data;
    });
    const helper = new JwtHelperService();
    //@ts-ignore
    const roles = helper.decodeToken(localStorage.getItem('JWT'));
    this.currentRoles = roles.roles;
  }
  selectVacuum(vacuum: any) {
    if (vacuum.status === 'PROCESSING'){
      return
    }
    this.selectedVacuum = vacuum;
    this.selectedVacuumStatus = vacuum.status;
  }

  closePopup() {
    this.selectedVacuum = null;
  }

  turnOnVacuum(vacuumId: number, vacuum: Vacuum){
    this.vacuumService.turnOnVacuum(vacuumId).subscribe( data => {
      vacuum.status = 'PROCESSING'
      this.selectedVacuum = null;
      setTimeout(() => {
        this.vacuumService.getVacuums().subscribe( data2 => {
          this.vacuums = data2;
        }); 
      }, 15200);
    }, error => {
      alert(JSON.stringify(error));
    });
  }
  turnOffVacuum(vacuumId: number, vacuum: Vacuum){
    this.vacuumService.turnOffVacuum(vacuumId).subscribe( data => {
      vacuum.status = 'PROCESSING'
      this.selectedVacuum = null
      if (vacuum.startCount === 3){
        setTimeout(() => {
          this.vacuumService.getVacuums().subscribe( data2 => {
            this.vacuums = data2;
          });
        }, 32200);
      } else {
        setTimeout(() => {
          this.vacuumService.getVacuums().subscribe( data2 => {
            this.vacuums = data2;
          });
        }, 18200);
      }
    }, error => {
      alert(JSON.stringify(error));
    });
  }
  deactivateVacuum(vacuumId: number){
    this.vacuumService.deactivateVacuum(vacuumId).subscribe( data => {
      this.vacuumService.getVacuums().subscribe( data2 => {
        this.selectedVacuum = null
        this.vacuums = data2;
      });
    }, error => {
      alert(JSON.stringify( error ));
    })
  }
  dischargeVacuum(vacuumId: number){
    this.vacuumService.dischargeVacuum(vacuumId).subscribe( data => {
      this.vacuumService.getVacuums().subscribe( data2 => {
        this.selectedVacuum = null
        this.vacuums = data2
        setTimeout(() => {
          this.vacuumService.getVacuums().subscribe( data3 => {
            this.vacuums = data3;
          });
        }, 32200);
      });
    }, error => {
      alert(JSON.stringify( error ));
    });
  }
  schedule(vacuumId: number){
    if (this.selectedDate === '' || this.selectedTime === '' || this.selectedStatus === ''){
      alert("Morate popuniti sva polja za zakazivanje operacije!");
      return;
    }
    let scheduledTime = this.selectedDate + 'T' + this.selectedTime + ':00';
    console.log(scheduledTime);
    this.vacuumService.scheduleVacuumOperation(vacuumId, this.selectedStatus, scheduledTime).subscribe( data => {
      alert(JSON.stringify(data))
      this.selectedVacuum = null;
    }, error => {
      alert(JSON.stringify("Desila se greska: " + JSON.stringify(error)))
    });
  }
}
