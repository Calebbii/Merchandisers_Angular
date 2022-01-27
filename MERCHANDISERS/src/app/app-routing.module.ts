import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'userprofile', component: UserComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'managerprofile', component: ManagerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
