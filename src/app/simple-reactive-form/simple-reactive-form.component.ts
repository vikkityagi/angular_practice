import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simple-reactive-form.component.html',
  styleUrl: './simple-reactive-form.component.css'
})
export class SimpleReactiveFormComponent {

  title = 'demoform';
  myform: any = FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.myform = this.fb.group({
      mobile_number: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit() {
    if (this.myform.invalid)
      return;
    console.log(this.myform.value)
  }

}
