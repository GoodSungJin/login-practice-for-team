import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';
import { BirthValidator } from '../birth-validator';
import { PhoneValidator } from '../phone-validator';

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
          <input type="text" class="id-input" formControlName="userid"
           maxlength="12"
           autofocus
           inputBackground
          >
          <button class="double-check">중복확인</button>
          <em *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요.</em>
          <em *ngIf="userid.errors?.pattern && userid.touched">영문이나 숫자 혹은 그 조합 8~12자리</em>
        </div>
      <ng-container formGroupName="passwordGroup">
        <div class="password">
          <span class="padding">*비밀번호</span>
        </div>
        <div class="password-wrap">
          <input type="password" class="password-input" formControlName="password" inputBackground>
          <em *ngIf="password.errors?.required && password.touched">비밀번호를 입력하세요.</em>
          <em *ngIf="password.errors?.pattern && password.touched">형식에 맞는 비밀번호를 입력 하세요.</em>
        </div>

        <div class="check-password">
          <span class="padding">*비밀번호 확인</span>
        </div>
        <div class="check-password-wrap">
          <input type="password" class="check-password-input" formControlName="confirmPassword" inputBackground>
          <em *ngIf="confirmPassword.errors?.required && confirmPassword.touched">비밀번호를 확인해주세요.</em>
          <em *ngIf="passwordGroup.errors?.match && confirmPassword.touched">비밀번호가 일치하지 않습니다.</em>
        </div>
      </ng-container>

        <div class="name">
          <span class="padding">*이름</span>
        </div>
        <div class="name-wrap">
          <input type="text" class="name-input" formControlName="name" inputBackground>
          <em *ngIf="name.errors?.required && name.touched">이름을 입력하세요.</em>
        </div>

        <div class="birth">
          <span class="padding">*생년월일</span>
        </div>
        <ng-container formGroupName="birthGroup">
        <div class="birth-wrap">
          <input type="text" class="year-input" formControlName="year" inputBackground> 년
          <input type="text" class="month-input" formControlName="month" inputBackground> 월
          <input type="text" class="day-input" formControlName="day" inputBackground> 일
          <em *ngIf="birthGroup.errors?.birthValid && birthGroup.touched">유효한 생년월일를 입력하세요.</em>
        </div>
        </ng-container>
        
        <ng-container formGroupName="phoneGroup">
          <div class="phone">
            <span class="padding">*휴대폰</span>
          </div>
          <div class="phone-wrap">
            <input type="text" class="phone-input" formControlName="firstNum" inputBackground> -
            <input type="text" class="phone-input" formControlName="middleNum" inputBackground> -
            <input type="text" class="phone-input" formControlName="lastNum" inputBackground>
            <em *ngIf="phoneGroup.errors?.phoneValid && phoneGroup.touched">유효한 휴대전화 번호를 입력하세요.</em>
          </div>
        </ng-container>

        <div class="email">
          <span class="padding">*이메일</span>
        </div>
        <div class="email-wrap">
          <input type="text" class="email-input" formControlName="email" inputBackground>
          <em *ngIf="email.errors?.required && email.touched">이메일을 입력하세요.</em>
          <em *ngIf="email.errors?.pattern && email.touched">형식에 맞는 이메일을 입력하세요.</em>
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
  <pre> birthGroup.errors : {{ birthGroup.errors | json }}</pre>
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

      birthGroup: this.fb.group({
        year: [''],
        month: [''],
        day: ['']
      }, { validator: BirthValidator.birthValid}),

      phoneGroup: this.fb.group({
        firstNum: [''],
        middleNum: [''],
        lastNum: ['']
      }, { validator: PhoneValidator.phoneValid}),

      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.pattern('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$')
      ]]
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

  get birthGroup() {
    return this.userForm.get('birthGroup');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phoneGroup() {
    return this.userForm.get('phoneGroup');
  }
}