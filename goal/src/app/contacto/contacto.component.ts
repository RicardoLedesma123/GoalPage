import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  title = 'correo';
  datos:FormGroup;
  constructor( private httpclient: HttpClient){
    this.datos = new FormGroup({
        correo: new FormControl('',[Validators.required, Validators.email]),
        asunto: new FormControl('',Validators.required),
        mensaje: new FormControl('',Validators.required)
    })
  }

  enviocorreo(){
    Notiflix.Loading.standard('cargando...');

    let params ={
      email:this.datos.value.correo,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje
    }
    console.log(params);
    this.httpclient.post('http://localhost:3000/envio',params).subscribe(resp =>{
      console.log(resp);
      Notiflix.Loading.remove();
    })
  }

}
