import { DeadPipe } from './dead.pipe';

describe('DeadPipe', () => {
  it('create an instance', () => {
    const pipe = new DeadPipe();
    expect(pipe).toBeTruthy();
  });
});
