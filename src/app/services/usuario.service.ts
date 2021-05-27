import { Usuario } from './../models/usuario.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta.models';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioObj: Usuario;

  constructor(private http: HttpClient, private router: Router) { }


// Función para loguing usuario
loginUsuarioService(usuario: Usuario): void{

// cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)
this.http.post<Respuesta>(`${environment.serverUrl}loginusuario.php`, JSON.stringify(usuario)).subscribe(
  (respuesta: Respuesta) => {
    console.log(respuesta);

    if (!respuesta.resultado) {
      console.log("usuario no existe");
      // mostrar una alerta con sweet alert
      Swal.fire('Datos del usuario incorrectos',
      respuesta.msg,
      'error')
    }else {
    console.log("Usuario existe");
    Swal.fire(
      'Bienvenido/a ' + respuesta.datos[0].nickusuario,
      '',
      "success"
    );
    environment.vsesion = usuario.id_usuari;
    this.usuarioObj = respuesta.datos[0];
    // aqui tengo que llamar el siguiente componente
    this.router.navigate(['/desktopusuario']);
    }
  },
  (error: any) => {
    console.log(error);
  }
 )









}



}
