import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:8080/auth/register';  // URL del endpoint de registro
  private loginUrl = 'http://localhost:8080/auth/login';  // URL del endpoint de login

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    console.log(credentials);
  
    // Cambia 'email' a 'mail' aquí
  const loginData = {
    mail: credentials.email,  // Cambiar email por mail
    password: credentials.password
  };

  return this.http.post<any>(this.loginUrl, loginData);
  }
}
