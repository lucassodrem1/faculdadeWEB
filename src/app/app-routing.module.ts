import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilServiceComponent } from './perfil-service/perfil-service.component';
import { InfoServiceComponent } from './info-service/info-service.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo:'/login', pathMatch: 'full'},
	{path: 'signin', component: SigninComponent},
	{path: 'perfil', component: PerfilComponent},
	{path: 'service/:ownerId/:serviceId', component: PerfilServiceComponent},
	{path: 'myinfoservice', component: InfoServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
