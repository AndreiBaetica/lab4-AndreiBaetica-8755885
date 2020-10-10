import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submitted = false;
  firstName;
  lastName;
  phone;
  email;

  constructor(private builder: FormBuilder) { }

  form = this.builder.group({
    firstNameForm: ['', Validators.required],
    lastNameForm: ['', Validators.required],
    phoneForm: ['', Validators.pattern('^[0-9]{1,50}$')],
    emailForm: ['', Validators.email]
  });

  get firstNameForm(): AbstractControl { return this.form.get('firstNameForm'); }
  get lastNameForm(): AbstractControl { return this.form.get('lastNameForm'); }
  get phoneForm(): AbstractControl { return this.form.get('phoneForm'); }
  get emailForm(): AbstractControl { return this.form.get('emailForm'); }

  onSubmit(): void {
    this.submitted = true;

    this.firstName = this.firstNameForm.value;
    this.lastName = this.lastNameForm.value;
    this.phone = this.phoneForm.value;
    this.email = this.emailForm.value;

    this.form.reset();
  }
  ngOnInit(): void {
  }

}
