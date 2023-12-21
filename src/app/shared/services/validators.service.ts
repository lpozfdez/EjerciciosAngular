import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
  constructor() { }

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public isFieldOneEqualFieldTwo( field1: string, field2: string ){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if(fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({notEqual: true}); //Le añadimos el error al input
        return { notEqual: true} //Le añadimos el error al formulario
      }
      formGroup.get(field2)?.setErrors(null); //Ojo con otros errores q pueda tener el input
      return null;

    }
  }

  isValidField( field: string, myForm: FormGroup ): boolean | null{
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

}
