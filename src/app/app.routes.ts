import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'employee/add',
    component: CreateEmployeeComponent,
  },
  {
    path: 'employee/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  { path: 'client/add', 
    component: AddClientComponent 
  },
  {
    path:'client/:id',
    component:AddClientComponent
  }
];
