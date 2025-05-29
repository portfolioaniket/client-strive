import { Component, inject, OnInit } from '@angular/core';
import { CreateEmployee } from '../../_models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  empService = inject(EmployeeService);
  toastr = inject(ToastrService)
  route = inject(Router)
  employeeData!: CreateEmployee;
  activatedRoute = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  employeeForm: FormGroup = this.fb.group({
    roleId: [{value:'', disabled:true}, [Validators.required]],
    userName: ['', [Validators.required]],
    empCode: ['', [Validators.required]],
    empId: [0, [Validators.required]],
    empName: ['', [Validators.required]],
    empEmailId: [{value:'', disabled:true}, [Validators.required]],
    empDesignationId: [{value:'', disabled:true}, [Validators.required]],
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
    erpEmployeeSkills: [[], [Validators.required]],
    ermEmpExperiences: [[], [Validators.required]],
  });
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getEmpData(id);
  }
  getEmpData(id: string) {
    const parmas = new HttpParams().set('id', id);
    return this.empService.getEmployeeById(parmas).subscribe(
      (res) => {
        console.log(res.data)
        this.employeeForm.setValue({...res.data})
        console.log(this.employeeForm)
      },
      (err) => {}
    );
  }
  onSubmit(){
    const payload = this.employeeForm.getRawValue();
    this.empService.updateEmployee(payload).subscribe(()=>{
      this.toastr.success("Employee Updated Successfully")
      this.route.navigate(['employee'])
    })
  }
}
