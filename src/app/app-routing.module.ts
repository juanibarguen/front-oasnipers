import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { ContactoComponent } from './public/contacto/contacto.component';
import { BlogComponent } from './public/blog/blog.component';
import { CursosComponent } from './public/cursos/cursos.component';
import { ServiciosComponent } from './public/servicios/servicios.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
  { path: '', component: InicioComponent }, 
  { path: 'servicios', component: ServiciosComponent }, 
  { path: 'cursos', component: CursosComponent }, 
  { path: 'blog', component: BlogComponent }, 
  { path: 'contacto', component: ContactoComponent }, 
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
