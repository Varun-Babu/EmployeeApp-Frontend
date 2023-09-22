import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesServicesService } from 'src/app/services/employees-services.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

employees: Employee[] = [];

constructor(private api: EmployeesServicesService){}

  ngOnInit(): void {
    this.api.getAllEmployees()
    .subscribe({
      next:(response) =>{
        console.log(response)
        this.employees = response;
      },
      error: (response)=>{
        console.log(response)
      }
    })
  }
}
