import { Component, inject, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators}   from '@angular/forms'
import { Designation, Roles } from '../../_models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit{
  fb = inject(FormBuilder);
  toastr = inject(ToastrService);
  router = inject(Router)
  empService = inject(EmployeeService)
  abc = new FormGroup({});
  roles: Roles[]=[]
  designations: Designation[]=[]
  isLoading: boolean=false;
  
  ngOnInit(): void {
    this.getDesignations()
    this.getRoles()
  }
  employeeForm: FormGroup = this.fb.group({
    roleId: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    empCode: ['', [Validators.required]],
    empId: [0, [Validators.required]],
    empName: ['', [Validators.required]],
    empEmailId: ['', [Validators.required]],
    empDesignationId: ['', [Validators.required]],
    empContactNo: ['', [Validators.required]],
    empAltContactNo: ['', [Validators.required]],
    empPersonalEmailId: ['', [Validators.required]],
    empExpTotalYear: ['', [Validators.required]],
    empExpTotalMonth: ['', [Validators.required]],
    empCity: ['', [Validators.required]],
    empState: ['', [Validators.required]],
    empPinCode: ['', [Validators.required]],
    empAddress: ['', [Validators.required]],
    empPerCity: ['', [Validators.required]],
    empPerState: ['', [Validators.required]],
    empPerPinCode: ['', [Validators.required]],
    empPerAddress: ['', [Validators.required]],
    password: ['', [Validators.required]],
    ErpEmployeeSkills: [[], [Validators.required]],
    ErmEmpExperiences: [[], [Validators.required]],
  });
  getRoles(){
    this.empService.getRoles().subscribe((res)=>{this.roles=res.data
      console.log(this.roles)
    })
  }
  getDesignations(){
    this.empService.getDesignations().subscribe((res)=>{this.designations=res.data
      console.log(this.designations)
    })
  }
  onSubmit(){
    this.isLoading=true;
    this.empService.createEmployee(this.employeeForm.value).subscribe(()=>{
      this.isLoading=false;
      this.toastr.success("User Created Successfully")
      this.employeeForm.reset()
      this.router.navigate(['employee'])
    },
  err=>{
    this.isLoading=false;
    this.toastr.error("There is some issue")
  })
  }
}
