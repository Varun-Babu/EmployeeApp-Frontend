import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesServicesService } from 'src/app/services/employees-services.service';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  constructor(private api:EmployeesServicesService, private router:Router){}

  addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  }

  addEmployee(){
    console.log(this.addEmployeeRequest)
    this.api.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(response) =>{
        console.log(response)
        this.router.navigate(['']);

      },
      error:(response)=>{
        console.log(response)
      }
    })
  }



  ngOnInit(): void {
    
  }
 

}
