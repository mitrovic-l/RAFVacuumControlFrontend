import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacuumService } from 'src/app/services/vacuum.service';

@Component({
  selector: 'app-addvacuum',
  templateUrl: './addvacuum.component.html',
  styleUrls: ['./addvacuum.component.css']
})
export class AddvacuumComponent implements OnInit{

  vacuumForm: FormGroup;

  constructor(private vacuumService: VacuumService, private router: Router, private formBuilder: FormBuilder){
    this.vacuumForm = this.formBuilder.group( {
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  addVacuum(){
    this.vacuumService.addVacuum(this.vacuumForm.get('name')?.value).subscribe( data => {
      this.router.navigate(['/vacuumcontrol']);
    }, error => {
      alert("GRESKA!");
    });
  }

}
