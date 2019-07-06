import { AbstractControl } from '@angular/forms';

export class BirthValidator {
  static birthValid(birthGroup: AbstractControl) {
    const year = birthGroup.get('year').value;
    const month = birthGroup.get('month').value;
    const day = birthGroup.get('day').value;
    const birth = year + '-' + month + '-' + day;
    const birthRegExp = /^(19[0-9][0-9]|20[0-1][0-9])-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  
    if(!birthRegExp.test(birth)) {
      return { birthValid: { birth } }
    } else {
      return null;
    }
  }
}
