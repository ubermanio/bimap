export default class BiMap<K, V> {
  private _entries: [K, V][] = [];

  set(key: K, value: V) {
    if (this.has(key) || this.has(value))
      throw new Error('No duplicate keys / values allowed in a BiMap');
    this._entries.push([key, value]);
  }

  public has(keyOrValue: K | V): boolean {
    return !!(
      this.getPrimary(keyOrValue as K) || this.getSecondary(keyOrValue as V)
    );
  }

  public get(keyOrValue: K | V): K | V | undefined {
    const primary = this.getPrimary(keyOrValue as K);
    if (primary) return primary as V;
    const secondary = this.getSecondary(keyOrValue as V);
    if (secondary) return secondary as K;
    return;
  }

  private getPrimary(key: K): V | undefined {
    const entry = this._entries.find(([mapKey]) => mapKey === key);
    if (entry) return entry[1];
    return;
  }

  private getSecondary(value: V): K | undefined {
    const entry = this._entries.find(([, mapValue]) => mapValue === value);
    if (entry) return entry[0];
    return;
  }
}
