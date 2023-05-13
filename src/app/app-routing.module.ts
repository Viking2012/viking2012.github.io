import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"login-form",component:LoginFormComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",redirectTo:"/login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
