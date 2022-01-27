import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { DashboardComponent } from './pages/dashboard/dashboard.component';
>>>>>>> 5298b0dca75535388abbddc2c621ac21a420e031
import { NavComponent } from './pages/nav/nav/nav.component';
import { UserComponent } from './pages/user/user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ManagerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
