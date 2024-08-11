import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nested-reactive-form.component.html',
  styleUrl: './nested-reactive-form.component.css'
})
export class NestedReactiveFormComponent {

  myform: any = FormGroup;

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      personalinfo: this.fb.group({
        name: [''],
        mobile: [''],
        pincode: [''],
        addresses: this.fb.array([this.createAddress()]),
      }),

    })

  }

  createAddress() {
    return this.fb.group({
      state: [''],
      zip: [''],
      city: ['']
    })
  }

  get addresses() {
    return this.myform.get('personalinfo.addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
}
