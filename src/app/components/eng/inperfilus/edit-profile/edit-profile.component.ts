import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  
// Variables
 editForm: FormGroup;
 submitted = false;
 mostrarMensaje = '';
 usmodificado: Usuario;
 sesion: number = environment.vsesion;

// Guardamos los datos que vamos a cambiar y que vienen del objeto guardado en el service
 usuario: Usuario;
 perfilUs: any;
 router: Router;

  constructor(
    // Iniciamos la variable formBuilder(se ha importado arriba) del tipo FormBuilder
    private formBuilder: FormBuilder, router: Router,

    // Creamos el objeto usu del Servide que es el objeto que tenemos guardado en el service
    private usuarioDeService: UsuarioService,
    private usu: UsuarioService
   ) {this.router = router }
  

  ngOnInit(): void {
   // usarioDeServie instancia la clase de UsuarioService usuarioObj, y guarda el objeto en usuario, que es lo que se visualiza para editar perfil
   this.usuario = this.usuarioDeService.usuarioObj;

   //creamos las condiciones de los campos del formulario para realizar el update
     // dentro de cada campo le ponemos los datos que tiene que mostrar en pantalla nada más mostrar el formulario
   this.editForm = this.formBuilder.group({
     //camp bbdd : [valor que printara al html,[validadors del formulari reactivo]]
     email: [this.usuario.email, [Validators.required, Validators.email]],
     contrasenya: [this.usuario.contrasenya],
     id_usuari: [this.usuario.id_usuari],
     nom:[this.usuario.nom, [Validators.required, Validators.minLength(2)]],
     cognom: [this.usuario.cognom, [Validators.required, Validators.minLength(2)]],
     telefon: [this.usuario.telefon, [Validators.required, Validators.minLength(9), Validators.maxLength(13)]],
     dni: [this.usuario.dni, [Validators.required, Validators.minLength(2), Validators.maxLength(9)]]
   });
 }

 //sirve para ejecutar el control del formulario en el html
 get controlFormulario() {
   return this.editForm.controls;
 }


 //funcion que se ejecuta al enviar el formulario
 onFormSubmit(): void {

   //guardamos los datos del usuario obteniendo todos los datos que va a recojer en el submit para editar y hacer el update
     //a cada campo recojemos el valor que se modifica del formulario
   this.usmodificado = new Usuario(
    this.editForm.controls.email.value,
    this.editForm.controls.contrasenya.value,
    this.editForm.controls.id_usuari.value,
    this.editForm.controls.nom.value,
    this.editForm.controls.cognom.value,
    this.editForm.controls.telefon.value,
    this.editForm.controls.dni.value
     /***********cal posar valor a la contrasenya  i  confirmar contrasenya  que pot ser el que te el objecte que recollim del service per omplir tot l'objecte per fer el update****************************************** */
    //  this.editForm.controls.contrasenya.value
   );

     console.log(this.usmodificado);

     // Llamamos a la función comprobarUsuarioService(está en el usuarioService) y le pasamos el objeto con todos los datos del usuario
     this.usu.editarDatosPerfil(this.usmodificado).subscribe(
       (datos: any) => {
         console.log(datos);
       if (datos == 1){
         // console.log("usuario existe");

         Swal.fire(
           'Ok',
           'Perfil Actualizado',
           'success'

         )
         this.router.navigate(['/esperfilus']);



       } else if (datos == 0){

         Swal.fire(
           'Error',
           'No se ha actualizado el perfil',
           'error'
         )
       } else {
         // console.log(datos);
         Swal.fire(
           'Perfil no actua',
           'Datos incorrectos',
           'warning')
       }
     },
     // Disparador error, lo que hace es guardar en la variable error any(qualquier) tipo de error y nos lo imprimirá por
     // consola con el console.log(error)
     (error: any) => {
       console.log(error);
       Swal.fire(
         'FATAL ERROR 3',
         'Se ha producido un error',
         'error'
       )
     }
   )
 }






}
