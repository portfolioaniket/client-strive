import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {  ToastrService } from 'ngx-toastr';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  isDeleteClicked:boolean = false;
  employeeData: Employee[]=[]
  employeeService = inject(EmployeeService)
  toastr = inject(ToastrService)
  router= inject(Router)
  isLoading: boolean = false;
  selectedEmpId!:number
  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees(){
    this.isLoading = true
    this.employeeService.getAllEmployees().subscribe(
      (res)=>{
        this.isLoading=false;
        this.employeeData=res.data
        console.log("RES",this.employeeData)
      },
      err=>{
        this.isLoading=false
        this.toastr.error("API Error")
      }
    )
  }
  onDelete(){
    this.deleteModalClose()
    this.isLoading=true
    const params= new HttpParams().set('empId', this.selectedEmpId)
    this.employeeService.deleteEmployee(params).subscribe(()=>{
      this.isLoading=false;
      this.toastr.success("User deleted successfully")
      this.getAllEmployees()
    },
    err=>{
      this.isLoading=false;
      this.toastr.success(err.message)
    }
    )
  }
  deleteModalClose(){
    this.isDeleteClicked = false;
  }
  deleteModalOpen(id: number){
    this.isDeleteClicked = true;
    this.selectedEmpId = id;
  }
  navigateToCreateEmp(){
    this.router.navigate(['employee/add'])
  }
  editPage(id:number){
    this.router.navigate([`employee/${id}`])
  }

}
