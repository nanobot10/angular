import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, upper: boolean = true): string {
    
    if(!value || value === '') {
      return value;
    }

    const values = value.split(' ');
    let result = '';
    
    console.log(values);

    for(let item of values) {
      if( upper ) {
        const c = item[0].toUpperCase() + item.substr(1, item.length - 1);
        result = result + ' ' + c;
      }else {
        const c = item[0].toLowerCase() + item.substr(1, item.length - 1);
        result = result + ' ' + c;
      }
    }

    return result;
  }

}
