import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        let ordered = value.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
        return ordered;
    }
}