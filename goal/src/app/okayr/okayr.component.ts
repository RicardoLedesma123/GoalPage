import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-okayr',
  templateUrl: './okayr.component.html',
  styleUrls: ['./okayr.component.css']
})
export class OkayrComponent implements OnInit {
  name?:string;
  cuenta?:string;
  correo?:string;
  pass1?:string;
  pass2?:string;


  constructor(private registros:RegisterService) { }

  ngOnInit(): void {
  }

  register3(): void {
    let body = {
    name:this.name,
    cuenta:this.cuenta,
    correo:this.correo,
    pass1:this.pass1,
    pass2:this.pass2,
    };

    this.registros.alta('http://localhost:3000/user2',body)

  .then((data) => {

    console.log(data);

    })

    .catch((err) => {

    console.log(err);

    });

  }
}
