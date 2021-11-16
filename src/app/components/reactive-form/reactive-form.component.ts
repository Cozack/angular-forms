import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  @Input()  set employee(value:number) {
    if (value > 1) {
      Array(value).fill(1).forEach(() => this.addItem())
      console.log(value);
    }
  }

  employeeGroupForm!: FormGroup

  get employeeFormArray() {
    return this.employeeGroupForm.get('employees') as FormArray
  }

  createEmployee(): FormGroup {
    return this.formBuilder.group({
      name:['', Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z][a-zA-Z\\\\-]*')],
      lastName:['', Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z][a-zA-Z\\\\-]*')],
      phone: ['', Validators.required,
        Validators.pattern('^[0-9]*$')],
      email: ['', Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      position: ['', Validators.required]
    })
  }

  addItem(): void {
    this.employeeFormArray.push(this.createEmployee());
  }

  constructor(private formBuilder: FormBuilder) {
    this.employeeGroupForm = this.formBuilder.group({
      employees: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
  }

  Submit() {
    console.log(this.employeeGroupForm)
  }

}
