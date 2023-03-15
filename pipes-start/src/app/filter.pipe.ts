import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, propertie: string) {
    if (value.length === 0) {
      return value;
    }
    const tempArray = [];
    for (let item of value) {
      if(value[propertie]===filterStatus){
        tempArray.push(item);
      }
    }
    return tempArray;
  }

}
