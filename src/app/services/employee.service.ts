import { Injectable } from '@angular/core';
import { Employee } from './../interfaces/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registro(nombre: string, curso: string, imagen: string) {
    const url = 'http://proyectoquet.appspot.com/cursos';
    const obj = { 
      nombre: nombre,
      curso: curso,
      imagen: imagen
    };
    return this
      .http
      .post<Employee>(url, obj, { headers: this.headers } )
      .pipe(map(res=> res, 
        console.log('Local registrado')));
  }

  getlocal() {
    const uri = 'http://proyectoquet.appspot.com/cursos/';
    return this
      .http
      .get<Employee>(uri)
      .pipe(tap(_ => console.log('') )
    );
  }

  deletelocal(id: string) {
    const uri = 'http://proyectoquet.appspot.com/cursos/' + id;
        return this
            .http
            .delete<Employee>(uri, { headers: this.headers })
            .pipe(map(res => {
              console.log('Local Eliminado', id)
              return res;
            }));
  }

  update( id, nombre,curso,imagen, createdAt, updateAt ) {
    const uri = 'http://proyectoquet.appspot.com/cursos/' + id;
    const obj = {
      id: id,
      nombre: nombre,
      curso: curso,
      imagen: imagen,
      createdAt: createdAt,
      updateAt: updateAt
    };
    return this
      .http
      .put<Employee>(uri, obj, { headers: this.headers })
      .pipe(map(res => {
        console.log('Ya modifica', curso)
        return res;
      }));  
  }

  getCurrentLocal(): Employee{
    let local_string = localStorage.getItem("currentLocal");
    if(!isNullOrUndefined(local_string)){
      let local: Employee=JSON.parse(local_string);
      return local;
    }
    
  }

  
}