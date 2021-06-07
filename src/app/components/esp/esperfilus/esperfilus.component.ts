import { Medicamento } from './../../../models/medicamento.model';
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
medicamento: Medicamento;
resp;
response: string = null;

sesion: number = environment.vsesion;


  constructor(
    // Creamos el objeto profe del ServiceProfesor
    private perfilUsuario: UsuarioService,
    private favoritosUsuario: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usuario = new Usuario();

    // Usamos el servicio para pedir todos los campos del usuario logueado
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

verFavoritos(): void {
  // Usamos el servicio para pedir todos los favoritos del usuario logueado
  this.favoritosUsuario.pedirFavoritosUsuario(this.sesion).subscribe(
    (resp: any)=>{
      this.medicamento = resp;

      console.log(this.medicamento);
    },
    (error: any)=>{
      console.log(error);
    }
  )
}
}