import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44370/api/auth/';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private post<T>(endpoint: string, payload: any)
  {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, payload);
    
  }

  constructor(private http: HttpClient) { }

  private handleAuthResponse(response$: Observable<AuthResponse>): Observable<AuthResponse> {
    return response$.pipe(
      tap(response => {
        this.setToken(response.token);
        this.isLoggedInSubject.next(true);
      })
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
    this.isLoggedInSubject.next(false);
  }


   getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  private hasToken(): boolean {
    return this.getToken() !== null;
  }

  //isLoggedIn(): boolean
  //{
  //  return this.getToken() !== null;
  //}
}
