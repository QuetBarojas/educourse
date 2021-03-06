import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RegisterService } from '../services/register.service';
import { Usuarios } from './../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  nombre: String = null;
  email: String = null;
  password: String = null; 
  data: Usuarios;

  private user: Usuarios = {
    nombre: '',
    email: '',
    password: ''
  };


  constructor(private userService: UserService, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password)
      .subscribe(user => { this.data = user;
        if (this.data) { 
          this.router.navigate(['/home']);
          console.log('Loggeado Correctamente');
          console.log(user.nombre);
          localStorage.setItem('currentUser' , JSON.stringify(user));
        } else {
          if(confirm('Login Incorrecto'))
          console.log('Error');
        }
      }); 
  }

  val(){
    return this.login();
  }

  register(nombre, email, password) {
    this.registerService.registro(nombre,email,password)
    .subscribe(user => {
      console.log(user);
      this.router.navigate(['/login'])
    });
  }

}


