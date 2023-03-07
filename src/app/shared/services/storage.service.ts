import { Injectable } from '@angular/core';
import { eStorage } from '../helpers/interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getItem(option: eStorage, key: string): any {
    if (option === eStorage.SS) {
      if (
        sessionStorage.getItem(key) === null &&
        sessionStorage.getItem(key) === undefined &&
        sessionStorage.getItem(key) === 'undefined' &&
        sessionStorage.getItem(key) === ''
      )
        return null;
      else {
        const inst: any = sessionStorage.getItem(key);
        return JSON.parse(inst);
      }
    }
    if (option === eStorage.LS) {
      if (
        localStorage.getItem(key) === null &&
        localStorage.getItem(key) === undefined &&
        localStorage.getItem(key) === 'undefined' &&
        localStorage.getItem(key) === ''
      )
        return null;
      else {
        const inst: any = localStorage.getItem(key);
        return JSON.parse(inst);
      }
    }
  }

  setItem(option: eStorage, key: string, value: any): void {
    if (option === eStorage.SS) sessionStorage.setItem(key, value);
    if (option === eStorage.LS) localStorage.setItem(key, value);
  }

  removeItem(option: eStorage, key: string): void {
    if (option === eStorage.SS) sessionStorage.removeItem(key);
    if (option === eStorage.LS) localStorage.removeItem(key);
  }
}
