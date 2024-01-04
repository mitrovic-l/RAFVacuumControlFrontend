import { Component, OnInit } from '@angular/core';
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
  constructor(private vacuumService: VacuumService){
    this.vacuums = [];
  }
  ngOnInit(): void {
    this.vacuumService.getVacuums().subscribe( data => {
      console.log("Uhvatio nesto...");
      console.log(JSON.stringify(data));
      this.vacuums = data;
    });
  }
  selectVacuum(vacuum: any) {
    this.selectedVacuum = vacuum;
  }
  closePopup() {
    this.selectedVacuum = null;
  }
}
