import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, CreateEmployee } from '../_models/employee.model';
import { API_ENDPOINTS } from '../_GlobalConst';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<APIResponse>{
    return this.http.get<APIResponse>(API_ENDPOINTS.GET_ALL_EMPLOYEE)
  }
  deleteEmployee(params:HttpParams){
    return this.http.delete(API_ENDPOINTS.DELETE_EMP_BY_ID,{params})
  }
  createEmployee(payload:CreateEmployee){
    return this.http.post(API_ENDPOINTS.CREATE_NEW_EMPLOYEE, payload)
  }
  getRoles():Observable<APIResponse>{
    return this.http.get<APIResponse>(API_ENDPOINTS.GET_ALL_ROLES);
  }
  getDesignations():Observable<APIResponse>{
    return this.http.get<APIResponse>(API_ENDPOINTS.GET_ALL_DESIGNATION)
  }
  getEmployeeById(params:HttpParams):Observable<APIResponse>{
    return this.http.get<APIResponse>(API_ENDPOINTS.GET_EMPLOYEE_BY_ID, {params})
  }
  updateEmployee(payload:CreateEmployee){
    return this.http.put(API_ENDPOINTS.UPDATE_EMPLOYEE, payload);
  }
}
