import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../creator.service';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent{
  id: string='';
  array: any[] = [];
  constructor(private  postservice : CreatorService ) {
    this.postservice.consulta('http://localhost:3000/user').subscribe((res:any) =>{
      this.array=res.array;
    });
  }

  baja(){
    let body={
      id:this.id
    }
    this.postservice.baja('http://localhost:3000/baja',body)
    .then((data) => {
      console.log(data);
      })
      .catch((err) => {
      console.log(err);
      });

    }
  }

