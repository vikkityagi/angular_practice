import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-patch-value',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './patch-value.component.html',
  styleUrl: './patch-value.component.css'
})
export class PatchValueComponent implements OnInit {

  patchform: any = FormGroup;
  patchJson = {name:'test',mobile_no:'1234567891',gender:'Male',address:'testaddress'}

  constructor(private _fb: FormBuilder,private location:Location){

  }

  back(){
    // this.router.navigate(['../../'])
    this.location.back()
  }

  ngOnInit(): void {
      this.init();
  }

  init(){
    this.patchform = this._fb.group({
      name: ['',Validators.required],
      mobile_no:['',Validators.required],
      address: ['',Validators.required],
      gender: ['',Validators.required],
      city:['',Validators.required]
    })
  }

  patchValue(){
    this.patchform.patchValue(this.patchJson);
  }

}
