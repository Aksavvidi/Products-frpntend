import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component: WelcomeComponent},
]

@NgModule({
  declarations: [
    LoginComponent,WelcomeComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
})
export class PublicModule { }
