import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../creator.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent{
  array: any[] = [];
  constructor(private  postservice : CreatorService ) {
    this.postservice.consulta('http://localhost:3000/user').subscribe((res:any) =>{
      this.array=res.array;
    });
  }

  nombrec(){
    
  }
}
