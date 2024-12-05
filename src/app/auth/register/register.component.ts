import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';  // Asegúrate de tener el servicio AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router  // Inyectamos el router para redirigir después del registro
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mail: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        this.successMessage = 'Usuario registrado con éxito. ¡Revisa tu correo!';
        this.errorMessage = '';
        this.loading = false;
        // Redirigir a una página de login o dashboard
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Error al registrar el usuario: ' + error.error;
        this.successMessage = '';
        this.loading = false;
      }
    });
  }
}