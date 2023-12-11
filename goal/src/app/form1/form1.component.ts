import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  id?:string;
  company?:string;
  fecha?:string;
  lista?:string;
  puesto?:string;
  exp?:string;
  modalidad?:string;
  presencial='';
  remoto='';
  hibrido='';
  sueldo?:string;

  constructor(private registros:RegisterService) { }

  ngOnInit(): void {
  }

  register2(): void {
    let body = {
    id:this.id,
    company:this.company,
    fecha:this.fecha,
    lista:this.lista,
    puesto:this.puesto,
    exp:this.exp,
    modalidad:this.modalidad,
    sueldo:this.sueldo
    };

    this.registros.alta('http://localhost:3000/user',body)

  .then((data) => {

    console.log(data);

    })

    .catch((err) => {

    console.log(err);

    });

  }
}
