import { Usuario } from './../../../models/usuario.model';
// import { EncriptarDecriptarService } from './../../services/encriptar-decriptar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-eslogin',
  templateUrl: './eslogin.component.html',
  styleUrls: ['./eslogin.component.css']
})
export class EsloginComponent implements OnInit {
  // Variable loginForm de tipo FormGroup
  loginForm: FormGroup;
  submitted = false;

  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: quotemark
  // tslint:disable-next-line: no-inferrable-types
  alerta: string = " ";
  
  //  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private loginUsuario: UsuarioService,
    private router: Router,
    // private encriptar: EncriptarDecriptarService
  ) { }

  ngOnInit(): void {
    // en el login form entran los datos del formulario y aquí se hace la comprobación

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasenya: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,20})') ]],
    }, {
    });
  }

  // Sirve para ejecutar el control del formulario en el html
  get controlFormulario() {
    return this.loginForm.controls;
  }

  loginUs() {
    // Se crea una instancia para el service de login  pasando los datos del formulario
     let usuario = new Usuario(this.loginForm.controls.email.value,
     
      this.loginForm.controls.contrasenya.value);
      console.log(this.loginForm.controls.email.value);
      
    // Con el submit se comprueba si se ha enviado el formulario
      this.submitted = true;
      

      // En caso de no tener los valores correctos para loguear
      if (this.loginForm.invalid) {
        return;
      }

      // En caso de que sea correcto envío los datos al subscribe del usuarioService
      else {
        // var passEncriptada = this.encriptar.set("", usuario.contrasenya);
        // usuario.contrasenya = passEncriptada;

      // Llamamos a la función para Service y le pasamos el objeto usuario con el mail y la contraseña recogidos del Html
        this.loginUsuario.loginUsuarioService(usuario)
        console.log(usuario);
      }
  }

}
