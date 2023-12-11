import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../creator.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  array: any[] = [];

  constructor(private  postservice : CreatorService ) {
    this.postservice.consulta('http://localhost:3000/user').subscribe((res:any) =>{
      this.array=res.array;
    });

  }
}
