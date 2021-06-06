import { Medicamento } from './../../../models/medicamento.model';
import  Swal  from 'sweetalert2';
import { Respuesta } from './../../../models/respuesta.models';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuario.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-esbuscarmedicamentos',
  templateUrl: './esbuscarmedicamentos.component.html',
  styleUrls: ['./esbuscarmedicamentos.component.css']
})
export class EsbuscarmedicamentosComponent implements OnInit {

  // Variables
  respuestaM: Medicamento[];
  resp;
  respuesta: Respuesta;
  listaMedicamento: Medicamento;
  medicamentoSelect: Medicamento;

  sesion: number = environment.vsesion;
  idMedicamento: number = environment.idM;
  
  constructor( 
    // Creamos el objeto Medicamento del ServiceUsuario
    private listarMedicamentos: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
 // Usamos el servicio para pedir todos los campos del Medicamento y poder listarlo
 this.listarMedicamentos.pedirListadoMedicamentos().subscribe(
   
  (resp: any) => {
    this.respuestaM = resp;
    console.log(this.respuestaM);
  },
  (error: any) => {
    console.log(error);
  }
)
}

// Función que se ejecuta con click en el ranking que queremos seleccionar para editar
// selectRanking(nombreRanking: Ranking): void {
// console.log(nombreRanking);
// // especifico el campo del objeto que quiero guardar como variable global
// environment.idRanking = nombreRanking['idRanking'];
// this.idRanking = environment.idRanking;
// console.log(this.idRanking);
// }

// // Funcion que se ejecuta con click en el ranking que queremos seleccionar para modificar el nombre
// selectRankingNombre(nombreRanking: Ranking): void {
// Swal
//   .fire({
//     title: "Modifica el nombre del Ranking " + nombreRanking['nombreRanking'],
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Guardar",
//     cancelButtonText: "Cancelar",
//   })
//   .then(resultado => {
//     if (resultado.value) {
//       let nombre = resultado.value;
//       console.log("Hola, " + nombre);

//       // Funció que permet canviar el nom del ranking seleccionat, envia al service l'id del ranking seleccionat i el nom que s'ha canviat al sweetAlert
//       this.cambiarNombre.selectRankingNombre(nombreRanking['idRanking'], nombre).subscribe(
//         (resp: any) => {
//           this.respuestaRR = resp;

//           nombreRanking.nombreRanking = nombre;
//           console.log(nombreRanking.nombreRanking);

//           Swal.fire(
//             'Nombre Ranking modificado correctamente!',
//             '',
//             'success'
//           )

//           this.respuestaR.map((value: Ranking) => {

//             if (value['idRanking'] === environment.idRanking) {
//               value['nombreRanking'] = nombre;
//             }
//           }
//           );

//         },
//         (error: any) => {
//           console.log(error);
//         }
//       )
//     }
//   });
//}




}
