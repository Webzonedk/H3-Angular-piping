import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'md5Converter'
})
export class Md5ConverterPipe implements PipeTransform {

  transform(value: string, args?: string[]): unknown {
    let md5 = new Md5();


    if (value != "") {
      md5.appendStr(value);
      let output = md5.end();
      return output
    }
    return null;
  }

}
