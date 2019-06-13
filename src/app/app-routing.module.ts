import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilServiceComponent } from './perfil-service/perfil-service.component';
<<<<<<< HEAD
import { InfoServiceComponent } from './info-service/info-service.component';
=======
import { MoreServiceComponent } from './more-service/more-service.component';
>>>>>>> 498e013d6ad7caf536667faeb4b33e023e900661

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo:'/login', pathMatch: 'full'},
	{path: 'signin', component: SigninComponent},
	{path: 'perfil', component: PerfilComponent},
	{path: 'service/:ownerId/:serviceId', component: PerfilServiceComponent},
<<<<<<< HEAD
	{path: 'myinfoservice', component: InfoServiceComponent}
=======
	{path: 'more-service/:serviceCategory', component: MoreServiceComponent}
>>>>>>> 498e013d6ad7caf536667faeb4b33e023e900661
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
