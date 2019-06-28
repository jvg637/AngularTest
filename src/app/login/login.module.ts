// Modules
import { SharedModule } from '../shared/shared.module'; // <-- NEW
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component'; // <-- NEW

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class LoginModule { }
