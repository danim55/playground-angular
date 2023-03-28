import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten',
    pure: false,
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        value.sort((a,b)=> {
            if(a.name > b.name){
                return 1;
            }
            else{
                return -1;
            }
        })
        return value;
    }
}