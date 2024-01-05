import { Component, OnInit } from '@angular/core';
import { Vacuum } from 'src/app/model';
import { VacuumService } from 'src/app/services/vacuum.service';

@Component({
  selector: 'app-searchvacuum',
  templateUrl: './searchvacuum.component.html',
  styleUrls: ['./searchvacuum.component.css']
})
export class SearchvacuumComponent implements OnInit{

  searchName: string = ''
  statusOn: boolean = false
  statusOff: boolean = false
  statusDischarging: boolean = false
  startDate: string = ''
  endDate: string = ''

  vacuums: Vacuum[] = []
  filteredVacuums: Vacuum[] = []

  constructor(private vacuumService: VacuumService){
    this.vacuumService.getVacuums().subscribe( data => {
      this.vacuums = data;
    })
  }
  ngOnInit(): void {
    
  }
  searchVacuums(){
    let searchQ = '?name='+this.searchName+'&dateFrom='+this.startDate+'&dateTo='+this.endDate+'&statuses=';
    if (this.statusOn){
      searchQ += 'ON,'
    }
    if (this.statusOff){
      searchQ+='OFF,'
    }
    if (this.statusDischarging){
      searchQ+='DISCHARGING'
    }
    console.log(searchQ);
    this.vacuumService.searchVacuums(searchQ).subscribe( data => {
      this.vacuums = data;
    });
  }
}
