import { Injectable } from '@angular/core';

const TOKEN_KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hastToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
