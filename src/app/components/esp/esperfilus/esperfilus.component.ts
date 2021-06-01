import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-esperfilus',
  templateUrl: './esperfilus.component.html',
  styleUrls: ['./esperfilus.component.css']
})
export class EsperfilusComponent implements OnInit {

  // Variables
usuario: Usuario;
resp;
response: string = null;

//categoria: string = null;

sesion: number = environment.vsesion;


  constructor(
    // creamos el objeto profe del ServiceProfesor
    private perfilUsuario: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usuario = new Usuario();

    // usamos el servicio para pedir todos los campos del usuario logeado
        this.perfilUsuario.pedirDatosUsuario(this.sesion).subscribe(
          (resp: Usuario[])=>{
            this.usuario = resp[0];
    
    
            // console.log(resp);
    
          },
          (error: any) => {
            console.log(error);
          }
        )
  }

}
