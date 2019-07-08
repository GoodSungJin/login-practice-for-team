import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(passwordGroup: AbstractControl){
    const password = passwordGroup.get('password').value;
    const confirmpassword = passwordGroup.get('confirmPassword').value;

    if (password !== confirmpassword) {
      return {match : {password, confirmpassword}};
    } else {
      return null;
    }

  }
}
