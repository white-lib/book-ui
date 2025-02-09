class SingletonStorage {
  private _classPrefix: string = "";

  set classPrefix(value: string) {
    this._classPrefix = value;
  }

  get classPrefix() {
    return this._classPrefix;
  }
}

export const singletonStorage = new SingletonStorage();
