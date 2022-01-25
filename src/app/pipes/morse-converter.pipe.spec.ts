import { MorseConverterPipe } from './morse-converter.pipe';

describe('MorseConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MorseConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
