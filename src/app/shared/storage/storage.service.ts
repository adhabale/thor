import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private subscriptionName :string;
  private _keyVault: object;

  constructor() {
    this._keyVault = {};
  }

  getItem(key: string) {
    return this._keyVault[key];
  }

  setItem(key: string, value: string) {
    this._keyVault[key] = value;
  }

  getSubscriptionName() {
    return this.subscriptionName;
  }

  setSubscriptionName(name) {
    this.subscriptionName = name;
  }
}
