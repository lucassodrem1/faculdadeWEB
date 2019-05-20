import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo:'/login', pathMatch: 'full'},
	{path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
