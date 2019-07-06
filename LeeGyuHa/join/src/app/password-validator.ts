import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(passwordGroup: AbstractControl) {
    const password = passwordGroup.get('password').value;
    const confirmPassword = passwordGroup.get('confirmPassword').value;
    if( password !== confirmPassword ) {
      return { match: {password, confirmPassword}};
    } else {
      return null;
    }
  }
}
