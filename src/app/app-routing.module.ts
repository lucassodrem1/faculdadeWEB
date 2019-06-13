import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilServiceComponent } from './perfil-service/perfil-service.component';
import { MoreServiceComponent } from './more-service/more-service.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo:'/login', pathMatch: 'full'},
	{path: 'signin', component: SigninComponent},
	{path: 'perfil', component: PerfilComponent},
	{path: 'service/:ownerId/:serviceId', component: PerfilServiceComponent},
	{path: 'more-service/:serviceCategory', component: MoreServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
