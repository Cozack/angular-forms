import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';

  employeeCount!:number;

  addCountOfEmployees(value:number) {
    this.employeeCount = value
  }
}
