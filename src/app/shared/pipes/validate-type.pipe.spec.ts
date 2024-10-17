import { ValidateTypePipe } from './validate-type.pipe';

describe('ValidateTypePipe', () => {
  it('create an instance', () => {
    const pipe = new ValidateTypePipe();
    expect(pipe).toBeTruthy();
  });
});
