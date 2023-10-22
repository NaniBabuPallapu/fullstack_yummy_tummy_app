import { AbstractControl } from "@angular/forms";

export function PasswrodValidator(control: AbstractControl) {
    if (control && control.value && (control.value === null)&& control.value==='') {
        return null
    }
    if (control.value.length >= 4 && control.value.length <= 15) {
        return null; // Don't show the error until at least 10 characters are entered
    }
    return {
        PasswrodValidator: true
    };
}