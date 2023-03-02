import { FormControl } from "@angular/forms";

export class CustomValidators {
    static isForbiddenName(control: FormControl): { [s: string]: boolean } {
        if(control.value === 'adolfo'){
            return {'isForbiddenName': true}
        }
        return null
    }
}