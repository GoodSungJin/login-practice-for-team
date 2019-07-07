import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userId: new FormControl('', [
        Validators.pattern('^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'),
        Validators.required
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [
          Validators.pattern('^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'),
          Validators.required
        ]),
        confirmPassword: new FormControl('', [
          Validators.pattern('^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'),
          Validators.required
        ])
      }, PasswordValidator.match),
      userName: new FormControl('', [
        Validators.required
      ]),
      dateOfBirth: new FormGroup({
        year: new FormControl('', [
          Validators.pattern('[0-9]{4}'),
          Validators.required
        ]),
        month: new FormControl('', [
          Validators.pattern('[0-9]{1-2}'),
          Validators.required
        ]),
        day: new FormControl('', [
          Validators.pattern('[0-9]{1-2}'),
          Validators.required
        ]),
      }),
      phoneNumber: new FormGroup({
        front: new FormControl('', [
          Validators.pattern('[0-9]{3}'),
          Validators.required
        ]),
        middle: new FormControl('', [
          Validators.pattern('[0-9]{4}'),
          Validators.required
        ]),
        back: new FormControl('', [
          Validators.pattern('[0-9]{4}'),
          Validators.required
        ]),
      })
    })

    console.dir(this.userForm);
  }



  get userId() {
    return this.userForm.get('userId');
  }

  get userPasswordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get userPassword() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get userName() {
    return this.userForm.get('userName');
  }

  get dateOfBirth() {
    return this.userForm.get('dateOfBirth');
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }



}
