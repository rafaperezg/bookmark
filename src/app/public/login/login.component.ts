import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor() { }

  getErrorMessafeForUsername() {
    const hasError = this.username.hasError('required');
    return hasError ? 'Nombre de usuario es requerido' : '';
  }

  getErrorMessafeForPassword() {
    const hasError = this.password.hasError('required');
    return hasError ? 'La contraseña es requerida' : '';
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

}
