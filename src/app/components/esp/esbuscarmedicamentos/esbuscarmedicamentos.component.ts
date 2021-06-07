import { Favorito } from './../../../models/favoritos.model';

import { Usuario } from './../../../models/usuario.model';
import { Medicamento } from './../../../models/medicamento.model';
import  Swal  from 'sweetalert2';
import { Respuesta } from './../../../models/respuesta.models';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuario.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';






@Component({
  selector: 'app-esbuscarmedicamentos',
  templateUrl: './esbuscarmedicamentos.component.html',
  styleUrls: ['./esbuscarmedicamentos.component.css']
})
export class EsbuscarmedicamentosComponent implements OnInit {
  idM: number = null;
  sesion: number = null;
  respuesta: Respuesta;
  nomM: string;
  favorito: Favorito;
  

 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: UsuarioService,
    private favoritos: UsuarioService,
    
  ) {  }

  searchForm: FormGroup;
  invalidLogin: boolean = false;
  submitted: boolean = false;
  contrasenyaNoCoincideix: boolean = false;
  usuariNoExisteix: boolean = false;
  missatgeData: any;
  correuData: any;
  loginData: null;
  query: string;
  resultat: any;
  medicamentos: any;

  query00: string;
  query01: string; query101: string; query201: string;
  query02: string; query102: string; query202: string;
  query03: string; query103: string; query203: string;
  query04: string; query104: string; query204: string;
  query05: string; query105: string; query205: string;
  query06: string; query106: string; query206: string;
  queryWhere: string;


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nombre: ['', Validators.maxLength(30)],
      codigo_barras: [0, Validators.maxLength(30)],
      patologia: ['', Validators.maxLength(30)],
      laboratorio: ['', Validators.maxLength(30)],
      efect_second: ['', Validators.maxLength(30)],
      form_farm: ['', Validators.maxLength(30)],
    });

    this.submitted = false;
    this.query = "";
    this.query00 = "a.id_medicament ";
    this.query01 = ""; this.query101 = ""; this.query201 = "";
    this.query02 = ""; this.query102 = ""; this.query202 = "";
    this.query03 = ""; this.query103 = ""; this.query203 = "";
    this.query04 = ""; this.query104 = ""; this.query204 = "";
    this.query05 = ""; this.query105 = ""; this.query205 = "";
    this.query06 = ""; this.query106 = ""; this.query206 = "";
    this.queryWhere = "";
  }

  get f(){
    return this.searchForm.controls;
  }

  onSubmit(){
     this.submitted = true;
    console.log("Valor del formulari tal qual");
    console.log(this.searchForm.value);

    const loginData = {
      nombre: this.searchForm.controls.nombre.value,
      codigo_barras: this.searchForm.controls.codigo_barras.value,
      patologia: this.searchForm.controls.patologia.value,
      laboratorio: this.searchForm.controls.laboratorio.value,
      efect_second: this.searchForm.controls.efect_second.value,
      form_farm: this.searchForm.controls.form_farm.value
    };

    if(this.searchForm.controls.nombre.value !== ""){
      this.queryWhere = " WHERE ";
      this.query01 = "a.nom ";
      this.query101 = " a.nom LIKE '%"+loginData.nombre+"%'";
      this.query201 = "";
      if((loginData.codigo_barras !== 0) ||
      (loginData.patologia !== "") ||
      (loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query01 = this.query01+" ";
        this.query201 = this.query201+", ";
        this.query101 = this.query101+" AND ";
      }
    }
    if(this.searchForm.controls.codigo_barras.value !== 0){
      this.queryWhere = " WHERE ";
      this.query02 = "a.codi_barres ";
      this.query102 = " a.codi_barres = "+loginData.codigo_barras;
      this.query201 = "";
      loginData.codigo_barras = +loginData.codigo_barras;
      if((loginData.patologia !== "") ||
      (loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query02 = this.query02+", ";
        this.query201 = this.query201+", ";
        this.query102 = this.query102+" AND ";
      }
    }
    if(this.searchForm.controls.patologia.value !== ""){
      this.query201 = ", ";
      this.queryWhere = " WHERE ";
      this.query03 = " b.descripcio ";
      this.query103 = " a.id_medicament IN (SELECT id_medicament FROM patologia WHERE descripcio LIKE '%"+loginData.patologia+"%')";
      this.query203 = " patologia AS B";
      loginData.patologia = "'"+loginData.patologia+"'";
      if((loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query03 = this.query03+", ";
        this.query203 = this.query203+", ";
        this.query201 = this.query201+", ";
        this.query103 = this.query103+" AND ";
      }
    }
    if(this.searchForm.controls.laboratorio.value !== ""){
      this.query201 = ", ";
      this.queryWhere = " WHERE ";
      this.query04 = " c.nom ";
      this.query104 = " a.id_medicament IN (SELECT id_medicament FROM laboratori WHERE nom LIKE '%"+loginData.laboratorio+"%')";
      this.query204 = " laboratori AS C";
      loginData.laboratorio = "'"+loginData.laboratorio+"'";
      if((loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query04 = this.query04+", ";
        this.query204 = this.query204+", ";
        this.query201 = this.query201+", ";
        this.query104 = this.query104+" AND ";
      }
    }
    if(this.searchForm.controls.efect_second.value !== ""){
      this.query201 = ", ";
      this.queryWhere = " WHERE ";
      this.query05 = " d.descripcio ";
      this.query105 = " a.id_medicament IN (SELECT id_medicament FROM efectes_secundaris WHERE descripcio LIKE '%"+loginData.efect_second+"%')";
      this.query205 = " efectes_secundaris AS D";
      loginData.efect_second = "'"+loginData.efect_second+"'";
      if(loginData.form_farm !== "") {
        this.query05 = this.query05+", ";
        this.query205 = this.query205+", ";
        this.query201 = this.query201+", ";
        this.query105 = this.query105+" AND ";
      }
    }
    if(this.searchForm.controls.form_farm.value !== ""){
      this.query201 = ", ";
      this.queryWhere = " WHERE ";
      this.query06 = " e.descripcio";
      this.query106 = " a.id_medicament IN (SELECT id_medicament FROM forma_farmaceutica WHERE descripcio LIKE '%"+loginData.form_farm+"%')";
      this.query206 = " forma_farmaceutica AS E";
      loginData.form_farm = "'"+loginData.form_farm+"'";
    }
    if((this.searchForm.controls.nombre.value == "")
      && (this.searchForm.controls.codigo_barras.value == 0)
      && (this.searchForm.controls.patologia.value == "")
      && (this.searchForm.controls.laboratorio.value == "")
      && (this.searchForm.controls.efect_second.value == "")
      && (this.searchForm.controls.form_farm.value == "")){
        this.query01 = "a.id_medicament ";
        this.query201 = "";
    }

    this.query = "(SELECT "+this.query00+"FROM medicaments AS A "+this.query201+this.query203+this.query204+this.query205+this.query206+this.queryWhere
    +this.query101+this.query102+this.query103+this.query104+this.query105+this.query106+")";

    console.log("Valor del formulari despres de montar el select");
    console.log(this.query);

    this.apiService.pedirListadoMedicamentos(this.query).subscribe((data: any) => {
      console.log(data);

      if(data[0][0] !== 0){
        this.medicamentos = Object.values(data);
      }
      else{
        this.medicamentos = Object.values(data);
        this.medicamentos[0][2] = "No hay medicamentos con este criterio de busqueda";
      }



      this.searchForm.reset();
      this.ngOnInit();
    
  })
}

// Función que se ejecuta con click en el ranking que queremos seleccionar para visualizar
addFavoritos(item: Medicamento): void {
  console.log(item);
  // especifico el campo del objeto que quiero guardar como variable global
  environment.idM = item[0];
  this.nomM = item[1];
  this.idM = environment.idM;
  this.sesion = environment.vsesion;

  
  
  console.log(this.idM, this.sesion, this.nomM);

  // Función que envia al service el medicamento seleccionado para guardarlo en la bbdd y que se add a favoritos
  this.favoritos.añadirFavorito(this.idM, this.sesion, this.nomM).subscribe(
    (resp: any) => {
      this.respuesta = resp;

      console.log(this.respuesta);

      if (resp == 1){

        Swal.fire(
          '',
          'Favorito ya existe',
          'error'

        )

      } else if (resp == 0){

        Swal.fire(
          '',
          'Favorito añadido correctamente',
          'success'
        )
        }
    },
    
    (error: any) => {
      console.log(error);
    }
  )
}




}
