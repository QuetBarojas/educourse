import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Usuarios } from '../interfaces/user';
import { Employee } from './../interfaces/employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private RegisterService: RegisterService, private EmployeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }
  users: any;
  locals: any;
  us: Usuarios;
  local: Employee;
   
  ngOnInit() {
    this.getLocal();
    this.us = this.RegisterService.getCurrentUser();
    console.log(localStorage.getItem("currentUser"));
  } 

  

  get() {
    this.RegisterService.get().subscribe(res => {
      this.users = res;
      //console.log(res);
    });
  }
  delete(id){
    this.RegisterService.deleteUser(id).subscribe(res => {
      console.log(res);
    });
  } 
///////////////////////////////////Metodos Locales//////////////////////////////////////
  registerLocal(nombre, curso,imagen) {
    this.EmployeeService.registro(nombre,curso,imagen)
    .subscribe(local => {
      console.log(local);
    });
  }

  getLocal() {
    this.EmployeeService.getlocal().subscribe(res => {
      this.locals = res;
      //console.log(res);
    }); 
  }

  deleteLocal(id){
    this.EmployeeService.deletelocal(id).subscribe(res => {
      console.log(res);
    });
  } 

  

  
}
