import { AbstractControl } from '@angular/forms';

export class BirthValidator {
  static birthValid(birthGroup: AbstractControl) {
    const year = birthGroup.get('year').value;
    const month = birthGroup.get('month').value;
    const day = birthGroup.get('day').value;
    if( +year < 1890 || +year > 2019) {
      return { birthValid: { year}};
    } else if( +month < 1 || +month > 12 ) {
      return { birthValid: {  month }};
    } else if( +day < 1 || +day > 31 ) {
      return { birthValid: { day }};
    } else {
      return null;
    }
  }
}
