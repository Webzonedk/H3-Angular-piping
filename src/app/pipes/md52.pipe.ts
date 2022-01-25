import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';
@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let md5 = new Md5();

    if (value != "") {
      md5.appendStr(value).end()
      return md5.end()
    }
    return null;
  }
}
