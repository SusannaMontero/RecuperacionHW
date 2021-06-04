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


// Función para loguin usuario
loginUsuarioService(usuario: Usuario): void{

  console.log(usuario);

// cojo el valor de la variable global URL y le paso ademas el archivo que tengo creado en la carpeta servidor  (db.php)
this.http.post<Respuesta>(`${environment.serverUrl}login.php`, JSON.stringify(usuario)).subscribe(
  
  (respuesta: Respuesta) => {
    console.log(respuesta);

    if (!respuesta.resultado) {
      console.log("usuario no existe");
      // mostrar una alerta con sweet alert
      Swal.fire('Datos incorrectos',
      respuesta.msg,
      'error')
    }else {
    console.log("Usuario existe");
    Swal.fire(
      'Bienvenido/a ' + respuesta.datos[0].nom,
      '',
      "success"
    );
    
    // Se guarda el id del usuario recibido de la DB en la variable global vsesion
    environment.vsesion = respuesta.datos[0].id_usuari;

    // Se guarda el objeto recibido por respuesta con los datos del usuario en la variable usuarioObj
    this.usuarioObj = respuesta.datos[0];

    // Aquí se llama al siguiente componente que será el perfil
    this.router.navigate(['/esperfilus']);
    }
  },
  (error: any) => {
    console.log(error);
  }
 )
}

 // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de vsesion 
 public pedirDatosUsuario(sesion: any): Observable<any> {
  return this.http.post(`${environment.serverUrl}datosPerfil.php`, JSON.stringify(sesion));
}

// Función para que el usuario pueda editar los datos de su perfil
public editarDatosPerfil(usmodificado: Usuario): Observable<any>  {
  return this.http.post(`${environment.serverUrl}editarPerfil.php`, JSON.stringify(usmodificado));
}

}
