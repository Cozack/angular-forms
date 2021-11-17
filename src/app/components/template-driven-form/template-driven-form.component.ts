import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @Output() employeesNumberEvent = new EventEmitter <number>()

  displayedDataFromForm:boolean = false;
  isDisable: boolean = false;


  user = {
    name:'',
    lastName:'',
    email:'',
    phone:'',
    companyName:'',
    employees:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  addNewEmployeeNumber(value:number) {
    this.employeesNumberEvent.emit(value)
  }

  saveData() {
    this.displayedDataFromForm = true
    this.isDisable = !this.isDisable
  }
}
