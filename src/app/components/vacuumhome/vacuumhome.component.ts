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
    this.selectedVacuum = vacuum;
    this.selectedVacuumStatus = vacuum.status;
  }

  closePopup() {
    this.selectedVacuum = null;
  }
}
