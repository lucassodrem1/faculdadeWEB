import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PerfilServiceComponent } from './perfil-service/perfil-service.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo:'/login', pathMatch: 'full'},
	{path: 'signin', component: SigninComponent},
	{path: 'perfilService', component: PerfilServiceComponent},
	{path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
