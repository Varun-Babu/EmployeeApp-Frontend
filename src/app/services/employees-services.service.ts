import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { idText } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServicesService {

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }

  addEmployee(DatatoSend : Employee): Observable<Employee> {
    DatatoSend.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', DatatoSend);
  }

  getEmployee(id: string): Observable<Employee>{
     return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id)
  }

  editEmployee(id:string,DatatoSend: Employee): Observable<Employee>{
   return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' +id , DatatoSend )
  }

  deleteEmployee(id:string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id)
  }
}
