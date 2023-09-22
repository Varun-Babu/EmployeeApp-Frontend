import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesServicesService } from 'src/app/services/employees-services.service';

@Component({
  selector: 'app-editemployees',
  templateUrl: './editemployees.component.html',
  styleUrls: ['./editemployees.component.css']
})
export class EditemployeesComponent implements OnInit {

constructor(private route: ActivatedRoute,private api:EmployeesServicesService, private router: Router){}

employeeDetails :  Employee = {
  id:'',
  name:'',
  email:'',
  phone:0,
  salary:0,
  department:''
}

updateEmployee(){
  this.api.editEmployee(this.employeeDetails.id ,this.employeeDetails).subscribe({
    next:(response) =>{
      this.router.navigate(['']);
    }
  })
}

deleteEmployee(id:string){
  this.api.deleteEmployee(id).subscribe({
    next:(response) =>{
      this.router.navigate(['']);
    }
  })
}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if(id){
          this.api.getEmployee(id)
          .subscribe({
            next : (response)=>{
              this.employeeDetails = response;
            }
          })
        }
      }
    })
}
}
