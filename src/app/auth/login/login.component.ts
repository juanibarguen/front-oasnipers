import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Para la redirección posterior
import { AuthService } from '../auth.service'; // Asegúrate de que el AuthService está disponible

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;  // El formulario reactivo
  errorMessage: string | null = null;  // Para mostrar mensajes de error

  constructor(
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private authService: AuthService,  // Servicio de autenticación
    private router: Router  // Para navegar a otra página tras el login
  ) { 
    // Inicializar el formulario dentro del constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Campo de email con validación
      password: ['', [Validators.required, Validators.minLength(6)]]  // Campo de password con validación
    });
  }

  ngOnInit(): void {
    // Ya no es necesario inicializar el formulario en ngOnInit, ya lo hicimos en el constructor
  }

  // Método que se ejecuta cuando el formulario es enviado
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;  // Si el formulario es inválido, no hace nada
    }

    const loginData = this.loginForm.value;

    // Llamada al servicio de autenticación para realizar login
    this.authService.login(loginData).subscribe(
      (response) => {
        // Si el login es exitoso, redirige a otra página
        this.router.navigate(['/dashboard']);  // Puedes cambiar a la ruta que desees
        console.log("LOGIN EXITOSO");
        
      },
      (error) => {
        // Si ocurre un error, muestra un mensaje de error
        this.errorMessage = 'Correo electrónico o contraseña incorrectos';
      }
    );
  }
}
