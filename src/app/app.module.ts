import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {fakeBackendProvider, JwtInterceptor} from "./_helpers";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AlertService, AuthenticationService, UserService} from "./_services";
import {AuthGuard} from "./_guards";
import {AlertComponent} from "./_directives";
import {routing} from "./app.routing";
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AlertComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    routing,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
