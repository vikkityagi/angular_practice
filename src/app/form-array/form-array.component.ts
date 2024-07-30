import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {

  myform:any = FormGroup;

  constructor(private fb:FormBuilder){
    this.myform = this.fb.group({
      users: this.fb.array([])
    })

    this.addUser();
  }

  get users(){
    return this.myform.get('users') as FormArray;
  }

  addUser(){
    const adduser = this.fb.group({
      email: [''],
      password: [''],
      cpassword: [''],
      mobile: ['']

    })

    this.users.push(adduser);
  }

  onSubmit(){
    
  }


}
