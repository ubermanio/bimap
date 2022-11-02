import BiMap from '../src';

describe('BiMap', () => {
  const map = new BiMap();

  map.set('A', 'B');

  it('maps A <-> B', () => {
    const value = map.get('A');
    expect(value).toEqual('B');
  });

  it('maps B <-> A', () => {
    const key = map.get('B');
    expect(key).toEqual('A');
  });

  it('returns undefined when trying to access an non-existing key', () => {
    const value = map.get('F');
    expect(value).toBeUndefined();
  });

  it('throws an error when setting an existing key (A <-> C)', () => {
    const fn = () => map.set('A', 'C');
    expect(fn).toThrow();
  });

  it('throws an error when setting an existing value (D <-> B)', () => {
    const fn = () => map.set('A', 'C');
    expect(fn).toThrow();
  });
});
