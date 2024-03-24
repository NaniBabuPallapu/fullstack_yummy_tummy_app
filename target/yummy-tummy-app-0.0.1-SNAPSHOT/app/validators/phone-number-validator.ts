import { AbstractControl } from "@angular/forms";

export function PhoneNumberValidator(control: AbstractControl) {
    // custom validation for confirmPassword. It will make sure length should be 10
    const phoneNumberPattern = /^\d{10}$/; // Adjust this pattern based on your requirements

    if (control && control.value && (control.value === null || control.value === '' || (phoneNumberPattern.test(control.value)))) {
        return null;
    }
    return {
        PhoneNumberValidator: true
    };



}
