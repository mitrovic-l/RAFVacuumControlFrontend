import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from 'src/app/model';
import { ErrormsgService } from 'src/app/services/errormsg.service';

@Component({
  selector: 'app-errormsg',
  templateUrl: './errormsg.component.html',
  styleUrls: ['./errormsg.component.css']
})
export class ErrormsgComponent implements OnInit{
  
  errors: ErrorMessage[];

  constructor(private errorMsgService: ErrormsgService){
    this.errors = [];
  }
  ngOnInit(): void {
    this.errorMsgService.getErrors().subscribe( data => {
      this.errors = data;
    });
  }
}
