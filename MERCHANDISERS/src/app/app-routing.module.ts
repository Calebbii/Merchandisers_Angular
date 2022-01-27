import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'userprofile', component: UserComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'managerprofile', component: ManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
