import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  // Usar el guardia aquí
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },  // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige al login por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
