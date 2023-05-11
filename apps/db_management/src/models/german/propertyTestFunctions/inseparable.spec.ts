import verbIsInseparable from './inseparable';

describe('verbIsInseparable correctly determines the state of the verb', () => {
  it('flags fallen as not inseparable', () => {
    const result = verbIsInseparable('fallen');
    expect(result).not.toBeTruthy();
  });

  it('flags mißfallen as inseparable', () => {
    const result = verbIsInseparable('mißfallen');
    expect(result).toBeTruthy();
  });

  it('flags en|fallen as not inseparable', () => {
    const result = verbIsInseparable('en|fallen');
    expect(result).not.toBeTruthy();
  });
});
