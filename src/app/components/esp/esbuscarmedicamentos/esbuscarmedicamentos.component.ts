import { MedicamentoId } from './../../../models/medicamentoId';
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

  // Variables
  respuestaM: Medicamento[];
  resp;
  respuesta: Respuesta;
  listaMedicamento: Medicamento;
  medicamentoSelect: Medicamento;

  sesion: number = environment.vsesion;
  idMedicamento: number = environment.idM;

  searchForm: FormGroup;
  invalidLogin: boolean = false;
  submitted: boolean = false;
  contrasenyaNoCoincideix: boolean = false;
  usuariNoExisteix: boolean = false;
  missatgeData: any;
  correuData: any;
  loginData: null;
  query: string = "";
  resultat: any;
  medicamentos: any;

  query00: string = "a.id_medicament ";
  query01: string = ""; query101: string = ""; query201: string = "";
  query02: string = ""; query102: string = ""; query202: string = "";
  query03: string = ""; query103: string = ""; query203: string = "";
  query04: string = ""; query104: string = ""; query204: string = "";
  query05: string = ""; query105: string = ""; query205: string = "";
  query06: string = ""; query106: string = ""; query206: string = "";
  queryWhere: string = "";
  
  constructor( 
    // Creamos el objeto Medicamento del ServiceUsuario
    private listarMedicamentos: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,) { }

 

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nombre: ['', Validators.maxLength(30)],
      codigo_barras: ['', Validators.maxLength(30)],
      patologia: ['', Validators.maxLength(30)],
      laboratorio: ['', Validators.maxLength(30)],
      efect_second: ['', Validators.maxLength(30)],
      form_farm: ['', Validators.maxLength(30)],
    });
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
      this.query201 = "medicaments AS A";
      if((loginData.codigo_barras !== "") ||
      (loginData.patologia !== "") ||
      (loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query01 = "a.id_medicament ";
        this.query201 = this.query201+", ";
      }
    }
    if(this.searchForm.controls.codigo_barras.value !== ""){
      this.queryWhere = " WHERE ";
      this.query02 = "a.codi_barres ";
      this.query102 = " a.codi_barres = "+loginData.codigo_barras;
      this.query202 = " medicaments AS A";
      loginData.codigo_barras = "'"+loginData.codigo_barras+"'";
      if((loginData.patologia !== "") ||
      (loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query02 = this.query02+", ";
        this.query202 = this.query202+", ";
        this.query102 = this.query102+" AND ";
      }
    }
    if(this.searchForm.controls.patologia.value !== ""){
      this.queryWhere = " WHERE ";
      this.query03 = " b.descripcio ";
      this.query103 = " b.descripcio LIKE '%"+loginData.patologia+"%'";
      this.query203 = " patologia AS B";
      loginData.patologia = "'"+loginData.patologia+"'";
      if((loginData.laboratorio !== "") ||
      (loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query03 = this.query03+", ";
        this.query203 = this.query203+", ";
        this.query103 = this.query103+" AND ";
      }
    }
    if(this.searchForm.controls.laboratorio.value !== ""){
      this.queryWhere = " WHERE ";
      this.query04 = " c.nom ";
      this.query104 = " c.nom LIKE '%"+loginData.laboratorio+"%'";
      this.query204 = " laboratori AS C";
      loginData.laboratorio = "'"+loginData.laboratorio+"'";
      if((loginData.efect_second !== "") ||
      (loginData.form_farm !== "")) {
        this.query04 = this.query04+", ";
        this.query204 = this.query204+", ";
        this.query104 = this.query104+" AND ";
      }
    }
    if(this.searchForm.controls.efect_second.value !== ""){
      this.queryWhere = " WHERE ";
      this.query05 = " d.descripcio ";
      this.query105 = " d.descripcio LIKE '%"+loginData.efect_second+"%'";
      this.query205 = " efectes_secundaris AS D";
      loginData.efect_second = "'"+loginData.efect_second+"'";
      if(loginData.form_farm !== "") {
        this.query05 = this.query05+", ";
        this.query205 = this.query205+", ";
        this.query105 = this.query105+" AND ";
      }
    }
    if(this.searchForm.controls.form_farm.value !== ""){
      this.queryWhere = " WHERE ";
      this.query06 = " e.descripcio";
      this.query106 = " e.descripcio LIKE '%"+loginData.form_farm+"%'";
      this.query206 = " forma_farmaceutica AS E";
      loginData.form_farm = "'"+loginData.form_farm+"'";
    }
    if((this.searchForm.controls.nombre.value == "")
      && (this.searchForm.controls.codigo_barras.value == "")
      && (this.searchForm.controls.patologia.value == "")
      && (this.searchForm.controls.laboratorio.value == "")
      && (this.searchForm.controls.efect_second.value == "")
      && (this.searchForm.controls.form_farm.value == "")){
        this.query01 = "nom";
        this.query201 = "medicaments";
    }

    this.query = "(SELECT "+this.query01+" FROM "+this.query201+this.query203+this.query204+this.query205+this.query206+this.queryWhere
    +this.query101+this.query102+this.query103+this.query104+this.query105+this.query106+")";

    console.log("Valor del formulari despres de montar el select");
    console.log(this.query);

 // Usamos el servicio para pedir todos los campos del Medicamento y poder listarlo
 this.listarMedicamentos.pedirListadoMedicamentos(this.query).subscribe(
   
  (resp: any) => {
    this.respuestaM = resp;
    console.log(this.respuestaM);
  },
  (error: any) => {
    console.log(error);
  }
)
}




}
