import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ADD_CLIENT, CLIENT } from '../../_const/client.const';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css',
})
export class AddClientComponent implements OnInit {
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute)
  toastr = inject(ToastrService)
  clientService = inject(ClientService);
  fb = inject(FormBuilder);
  clientConst = ADD_CLIENT;
  showError:boolean = false;
  isLoading:boolean = false;
  showForm: boolean = true;

  clientForm: FormGroup = this.fb.group({
    clientId: [0],
    contactPersonName: ['', [Validators.required, Validators.minLength(3)]],
    companyName: ['', [Validators.required,Validators.minLength(3)]],
    address: ['', [Validators.minLength(5)]],
    city: ['', [Validators.minLength(3)]],
    pincode: ['', [Validators.pattern(/^\d+$/)]],
    state: ['', [Validators.minLength(3)]],
    EmployeeStrength: ['', [Validators.pattern(/^\d+$/)]],
    gstNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    contactNo: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
    regNo: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
  });

  get Form(){
    return this.clientForm.controls;
  }
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(par=>{
      const id = par?.['id']
      if(id){
        this.getClientById(id)
      }
    })
  }
  navigateToClient(){
    this.route.navigate(['client'])
  }
  onSubmit(){
    if (this.clientForm.valid) {
      let payload;
      if (this.clientForm.value.EmployeeStrength) {
        payload = this.clientForm.value;
      } else {
        payload = { ...this.clientForm.value, EmployeeStrength: 0 };
      }
      this.clientService.addUpdateClient(payload).subscribe(
        () => {
          this.toastr.success('Client Added Successfully');
          this.navigateToClient();
        },
        (err) => {
          this.toastr.error('Some error occured');
        }
      );
    }
    else{
      this.toastr.error("Please see errors highlighted in red")
      this.showError=true
    }
  }
  getClientById(id:number){
    this.isLoading=true;
    const params = new HttpParams().set('clientId', id);
    this.clientService.getClientById(params).subscribe((res)=>{
      if(!res.result){
        this.toastr.error("User does not exist")
        this.showForm=false;
        this.isLoading=false
      }
      else{
        this.clientForm.addControl('employeeStrength', new FormControl(''))
      this.clientForm.patchValue({...res.data})
      console.log(this.clientForm.value)
      this.isLoading=false
      }
    },
  err=>{
    this.toastr.error("Either use is invalid or Server error")
    this.showForm=false
    this.isLoading=false;
  })
  }
}
