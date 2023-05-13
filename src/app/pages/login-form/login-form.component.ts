import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  private builder = inject(FormBuilder);
  loginForm = this.builder.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  hidePassword:boolean = true;

  onSubmit(): void {}
}
