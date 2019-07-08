import { PasswordValidator } from './password-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface UserData {
  id: string | number;
  password: string | number;
  name: string;
  year: number;
  month: number;
  day: number;
  number1: number;
  number2: number;
  number3: number;
  email: string;
}


@Component({
  selector: 'app-root',
  template: `
  <div class="user-wrap">

    <h2 class="mb35">가입정보입력
    <span class="ml10">
      <span class="c_purple text-sub">(*표시 항목 필수 입력)</span>
    </span>
    </h2>

    <h4>기본정보 (필수입력)</h4>
    <div class= "form-container">
    <form [formGroup]= "userForm">

    <div class="long-box">
    <a class="word-box">*아이디:</a> <input type= "text" name= "userid" formControlName= "userid" class="mr8" #inputId>
    <button class="input_id" (click)="checkId(inputId.value)">중복확인</button>
    <em *ngIf="userid.errors?.pattern && userid.touched" class="ml10 text-sub">영문이나 숫자 혹은 그 조합 8~12자리</em>
    </div>

    <div formGroupName= "passwordGroup">
    <div class="long-box">
      <a class="word-box">*비밀번호:</a> <input type= "password" formControlName= "password" #inputPW>
      <em *ngIf="password.errors?.pattern" class="ml10 text-sub">비밀번호는 영문, 또는 숫자 4~19자 사이로만 입력해주세요.</em>
    </div>
    <div class="long-box">
      <a class="word-box">*비밀번호 확인:</a> <input type= "password" formControlName= "confirmPassword">
      <em *ngIf="password.value !== confirmPassword.value" class="ml10 text-sub">비밀번호가 일치하지 않습니다.</em>
    </div>
    </div>

    <div class="long-box">
      <a class="word-box">*이름:</a> <input type= "text" formControlName="username" #inputName>
      <em *ngIf="username.errors?.pattern && username.touched" class="ml10 text-sub">이름은 2자 이상 입력해주세요.</em>
    </div>


    <div formGroupName= "birthdayGroup" class="long-box">
    <a class="word-box">*생년월일:</a>
    <input type= "text" formControlName= "year" class="w67" #year> &nbsp;년 &nbsp;
    <input type= "number" formControlName= "month" class="w44" #month> &nbsp;월 &nbsp;
    <input type= "number" formControlName= "day" class="w44" #day> &nbsp;일 &nbsp;
    </div>


    <div formGroupName= "phoneGroup" class="long-box">
    <a class="word-box">*휴대폰:</a>
    <input type= "number" formControlName= "phoneNumber1" class="w67" #phone1> &nbsp; - &nbsp;
    <input type= "number" formControlName= "phoneNumber2" class="w67" #phone2> &nbsp; - &nbsp;
    <input type= "number" formControlName= "phoneNumber3" class="w67" #phone3>
    </div>

    <div class= "long-box">
    <a class="word-box">*이메일:</a> <input type= "text" name= "email" formControlName= "email" #inputEmail>
    </div>

    <div class="button-wrap">
    <button class="mr7 cancel"><a class="btn-color" >취소</a></button>
    <button class="ml7 ok" (click)="addData(inputId.value, inputPW.value,
      inputName.value, year.value, month.value, day.value,
      phone1.value, phone2.value, phone3.value, inputEmail.value)" >확인</button>
    </div>

    </form>
    </div>
  </div>

  <div>{{CheckId}}</div>

 <!--
  <pre>id valid: {{userid.valid | json}}</pre>
  <pre>password valid: {{password.valid | json}}</pre>

  <pre>{{userForm.value | json}}</pre>
  <pre>{{userForm.valid | json}}</pre>
  -->

  `,
  styles: [`

  .form-container {
    width: 970px;
    border-top: 2px solid #351F66;
    margin: 0 auto;
  }

  input.w67 {
    width: 67px;
    height: 26px;
  }
  input.w44 {
      width: 44px;
      height: 26px;
  }
  input.w95 {
      width: 95px;
      height: 26px;
  }
  input.w300 {
      width: 300px;
      height: 26px;
  }

  .mb35 {
    margin-bottom:35px !important;
    color: #666;
  }

  .ml10{margin-left:10px !important}

  .mr7{margin-right:7px !important}
  .mr8{margin-right:8px !important}

  .text-sub{color:#666;font-size:12px;display:inline-block}

  .c_purple{color:#652d92 !important}

  h2 {
    width: 970px;
    margin: 0 auto;
  }

  h4 {
    font-weight: 700;
    font-family: '나눔고딕','NanumGothic','맑은 고딕','Malgun Gothic','돋움',dotum,'Apple SD Gothic Neo',sans-serif;
    width: 970px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .cancel {
    display: inline-block;
    width: 123px;
    height: 45px;
    border: 2px solid #351F66;
    color: #351F66;
    font-weight: bold;
    background: white;
    background-position: 0 -300px;
  }

  .ok {
    display: inline-block;
    background: #351F66;
    color: white;
    font-weight: bold;
    width: 123px;
    height: 45px;
    border: none;
    background-position: -150px -300px;
  }

  input {
    display: block;
    width: 200px;
    height: 26px;
    border: 1px solid #d9d9d9;
    background-color: #f8f8f8;
    font-size: 12px;
    line-height: 21px;
    color: #333
  }

  input:focus {
    background-color: #fff
  }

  button.input_id{
    background-position:-300px -200px;
    width: 94px;
    height: 30px;
    text-decoration: none;
    border: none;
    background: #F2F2F2;

  }

  .long-box {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #F2F2F2;
  }

  .word-box {
    width: 150px;
  }

  .button-wrap {
    text-align: center;
    margin-top: 10px;
  }
`]
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  CheckId = '';
  userdatas: UserData[] = [
    { id: "dbstjfk321", password: "qwerty123", name: "윤해서", year: 1, month: 1, day: 1, number1: 0o1010, number2: 2605, number3: 7621, email: "immsee098@gmail.com" }
  ];

  ngOnInit() {
    this.userForm = new FormGroup ({
      userid : new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9a-z]{8,13}')
      ]),

      passwordGroup: new FormGroup({
        password : new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9a-z]{4,19}')
        ]),
        confirmPassword : new FormControl('', Validators.required)
      }, PasswordValidator.match),

      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[가-힣]{2,5}')
      ]),

      birthdayGroup: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)
      }),

      phoneGroup: new FormGroup({
        phoneNumber1: new FormControl('', Validators.required),
        phoneNumber2: new FormControl('', Validators.required),
        phoneNumber3: new FormControl('', Validators.required)
      }),

      email: new FormControl('', [
        Validators.required,
      ])
    });

    console.dir(this.userForm);
  }

  // get 부분

  get userid() {
    return this.userForm.get('userid');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get username() {
    return this.userForm.get('username');
  }




  //유저데이터 저장
  addData(id: any, password: any, name: any, year: any, month: any, day: any, number1: any, number2: any, number3: any, email: any) {

    this.userdatas = [{id, password, name, year, month, day, number1, number2, number3, email}, ...this.userdatas];
    console.log(this.userdatas)
  }


  checkId(id: string | number) {
    const idlist = this.userdatas.map(userdata => (userdata.id === id) ? '이미 가입된 아이디입니다.' : '' );
    this.CheckId = idlist[0];
    console.log(idlist);
    }
  }


