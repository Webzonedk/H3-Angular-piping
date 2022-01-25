import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'morseConverter'
})
export class MorseConverterPipe implements PipeTransform {

  transform(value: string, args?: string[]): unknown {
    let morseCode: string = "";

    switch (value) {
      case "a":
        morseCode = "· —"
        return morseCode;
        break;

      case "b":
        morseCode = "— · · ·"
        return morseCode
        break;

      case "c":
        morseCode = "— · — ·"
        return morseCode
        break;

      default:
        break;
    }

    return null;
  }

}
