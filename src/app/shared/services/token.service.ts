import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from 'src/app/shared/services/storage.service';
import { eStorage } from '../helpers/interface';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private _jwtHelper: JwtHelperService,
    private _storageService: StorageService
  ) {}

  handleToken(token: string): void {
    this.token(token);
  }

  public get token(): string | any {
    return this._storageService.getItem(eStorage.LS, 'token');
  }

  public set token(token: string) {
    this._storageService.setItem(eStorage.SS, 'token', token);
  }

  removeToken(): void {
    this._storageService.removeItem(eStorage.LS, 'token');
    this._storageService.removeItem(eStorage.LS, 'expire');
  }

  getPayload(token: any) {
    return this._jwtHelper.decodeToken(token);
  }


  private isValid(): boolean {
    const token = this.token;
    if (token) {
      const payload = this._jwtHelper.decodeToken(token);
      if (payload) {
        const isExpired = this._jwtHelper.isTokenExpired(token);
        return !isExpired;
      } else {
        this.removeToken();
        return false;
      }
    }
    return false;
  }
}
