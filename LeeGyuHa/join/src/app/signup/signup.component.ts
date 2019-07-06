import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-signup',
  template: `
    <div class="main-content">
    <h4 class="basic-info">기본정보(필수입력)</h4>
    <form [formGroup] ="userForm">
    <div id="userJoinContainer" class="form-style">
        <div class="id">
          <span class="padding">*아이디</span>
        </div>
        <div class="id-wrap">
          <input type="text" class="id-input" formControlName="userid">
          <button class="double-check">중복확인</button>
          <em *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요.</em>
          <em *ngIf="userid.errors?.pattern && userid.touched">영문이나 숫자 혹은 그 조합 8~12자리</em>
        </div>
      <ng-container formGroupName="passwordGroup">
        <div class="password">
          <span class="padding">*비밀번호</span>
        </div>
        <div class="password-wrap">
          <input type="password" class="password-input" formControlName="password">
          <em *ngIf="password.errors?.required && password.touched">비밀번호를 입력하세요.</em>
          <em *ngIf="password.errors?.pattern && password.touched">비밀번호를 형식에 맞게 입력.</em>
        </div>

        <div class="check-password">
          <span class="padding">*비밀번호 확인</span>
        </div>
        <div class="check-password-wrap">
          <input type="password" class="check-password-input" formControlName="confirmPassword">
          <em *ngIf="confirmPassword.errors?.required && confirmPassword.touched">비밀번호를 확인해주세요.</em>
          <em *ngIf="confirmPassword.touched && passwordGroup.errors?.match">비밀번호가 일치하지 않습니다.</em>
        </div>
      </ng-container>

        <div class="name">
          <span class="padding">*이름</span>
        </div>
        <div class="name-wrap">
          <input type="text" class="name-input" formControlName="name">
          <em *ngIf="name.errors?.required && name.touched">이름을 입력하세요.</em>
        </div>

        <div class="birth">
          <span class="padding">*생년월일</span>
        </div>
        <div class="birth-wrap">
          <input type="text" class="year-input"> 년
          <input type="text" class="month-input"> 월 
          <input type="text" class="day-input"> 일
        </div>
        
        <div class="phone">
          <span class="padding">*휴대폰</span>
        </div>
        <div class="phone-wrap">
          <input type="text" class="phone-input"> -
          <input type="text" class="phone-input"> -
          <input type="text" class="phone-input">
        </div>

        <div class="email">
          <span class="padding">*이메일</span>
        </div>
        <div class="email-wrap">
          <input type="text" class="email-input">
        </div>
      </div>
    </form>
  </div>
  <div class="wrap-submit">
    <button class="cancel-btn">취소</button>
    <button class="confirm-btn">확인</button>
  </div>

  <pre> passwordGroup.password.valid : {{ password.valid | json }}</pre>
  <pre> passwordGroup.password.errors : {{ password.errors | json }}</pre>
  <pre> passwordGroup.confirmPassword.valid : {{ confirmPassword.valid | json }}</pre>
  <pre> passwordGroup.confirmPassword.errors : {{ confirmPassword.errors | json }}</pre>
  <pre> passwordGroup.errors : {{ passwordGroup.errors | json }}</pre>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9]{8,12}$')
      ]],
      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9]{6,12}$')
        ]],
        confirmPassword : ['', Validators.required]
      }, { validator: PasswordValidator.match}),
      name: ['', Validators.required]
    });
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get name() {
    return this.userForm.get('name');
  }
}