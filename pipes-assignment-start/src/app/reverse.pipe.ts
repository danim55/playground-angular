import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse',
})

export class ReversePipe implements PipeTransform {
    transform(str: any ) {
        let strs = str.split("").reverse().join("");
        return strs
    }
} 