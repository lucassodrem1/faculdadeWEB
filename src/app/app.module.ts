import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { PerfilServiceComponent } from './perfil-service/perfil-service.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InfoServiceComponent } from './info-service/info-service.component';

import { LimitToPipe } from './pipes/limitTo.pipe';
import { MoreServiceComponent } from './more-service/more-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    PerfilServiceComponent,
    PerfilComponent,
<<<<<<< HEAD
    InfoServiceComponent,
    LimitToPipe
=======
    LimitToPipe,
    MoreServiceComponent,
>>>>>>> 498e013d6ad7caf536667faeb4b33e023e900661
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
