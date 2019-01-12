import { Injectable } from '@angular/core';
import { Usuarios } from './../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(
    private http: HttpClient) {}

    headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });
    

  registro(nombre: string, email: string, password: string) {
    //const url = 'http://oscarmg-223307.appspot.com/operadores';
    const url = 'http://proyectoquet.appspot.com/operadores';
    const obj = { 
      nombre: nombre,
      email: email,
      password: password
    };
    return this
      .http
      .post<Usuarios>(url, obj, { headers: this.headers } )
      .pipe(map(res=> res, 
        console.log('Done')));
  }

  getUser() {
    const uri = 'https://proyectoquet.appspot.com/operadores/';
    return this
      .http
      .get<Usuarios>(uri)
      .pipe(tap(_ => console.log('') )
    );
  }

  deleteUser(id: string) {
    const uri = 'https://proyectoquet.appspot.com/operadores/' + id;
        return this
            .http
            .delete<Usuarios>(uri, { headers: this.headers })
            .pipe(map(res => {
              console.log('Eliminado', id)
              return res;
            }));
  }

  update(id, nombre, email, password) {
    const uri = 'https://proyectoquet.appspot.com/operadores/' + id; 
    const obj = {
      id: id,
      nombre: nombre,
      email: email,
      password: password
    };
    return this
      .http
      .put<Usuarios>(uri, obj, { headers: this.headers })
      .pipe(map(res => { 
        console.log('Ya actualiza', id)
        return res;
      }));  
  }

  get() {
    const uri = 'https://proyectoquet.appspot.com/operadores/';
    return this
            .http
            .get<Usuarios>(uri, { headers: this.headers })
            .pipe(map(res => {
              return res;
            }));
  }
  getCurrentUser(): Usuarios{
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user: Usuarios=JSON.parse(user_string);
      return user;
    } 
    
  }

} 

