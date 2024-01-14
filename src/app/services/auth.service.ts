import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44370/api/auth/';

  private post<T>(endpoint: string, payload: any)
  {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, payload);
    
  }

  constructor(private http: HttpClient) { }

  private handleAuthResponse(response$: Observable<AuthResponse>): Observable<AuthResponse> {
    return response$.pipe(
      tap(response => this.setToken(response.token))
    );
  }

  login(loginData: Login): Observable<AuthResponse> {
    const response$ = this.post<AuthResponse>("login", loginData);
    return this.handleAuthResponse(response$);
  }

  register(registerData: Register) {
    const response$ = this.post<AuthResponse>("register", registerData);
    return this.handleAuthResponse(response$);
  }

  logout(): void {
    this.removeToken();
  }


  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
