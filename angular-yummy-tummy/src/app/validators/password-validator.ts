import { AbstractControl } from "@angular/forms";

export function PasswrodValidator(control : AbstractControl ){
    if(control && control.value && (control.value ===null) || (control.value ==='') && control.value.length >=4 && control.value.length<=12){

        return null
    }
    return {
        PasswrodValidator : true
    };
}