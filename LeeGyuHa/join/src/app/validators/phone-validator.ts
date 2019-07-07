import { AbstractControl } from '@angular/forms';

export class PhoneValidator {
  static phoneValid (phoneGroup: AbstractControl) {
    const firstNum = phoneGroup.get('firstNum').value;
    const middleNum = phoneGroup.get('middleNum').value;
    const lastNum = phoneGroup.get('lastNum').value;
    const phoneNum = firstNum + '-' + middleNum + '-' + lastNum;
    const phoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    
    if(!phoneRegExp.test(phoneNum)) {
      return { phoneValid: { phoneNum } };
    } else {
      return null;
    } 
  }
}
