import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EditemployeesComponent } from './components/editemployees/editemployees.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

const routes: Routes = [
  {
    path:'',
    component:ViewEmployeesComponent
  },
  {
    path:'add',
    component:AddEmployeesComponent
  },
  {
    path:'edit/:id',
    component:EditemployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
