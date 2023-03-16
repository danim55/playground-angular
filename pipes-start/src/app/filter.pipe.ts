import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, propertie: string): any {
    if (value.length === 0 || filterStatus === '') {
      return value;
    }
    const tempArray = [];
    for (const item of value) {
      if (item[propertie] === filterStatus) {
        tempArray.push(item);
      }
    }
    return tempArray;
  }

}
