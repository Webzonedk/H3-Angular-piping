import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    let morseCode: string = "";

    switch (value) {
      case "a":
        morseCode = "· —"
        return morseCode;
        break;

      case "b":
        morseCode = "· —"
        return morseCode
        break;

      case "c":
        morseCode = "· —"
        return morseCode
        break;

      default:
        break;
    }

    return morseCode;
  }

}
