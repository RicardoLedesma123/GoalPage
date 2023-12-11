import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  title = 'cliente';
  datos!: FormGroup;
  private fileTmp:any;

  constructor(private httpClient: HttpClient, private restService: RestService){
    
    this.datos = new FormGroup({

     nombre: new FormControl('',Validators.required),
     correo: new FormControl('',[Validators.required,Validators.email]),
     compania: new FormControl('',Validators.required),
     puesto: new FormControl('',Validators.required),

    });
    
  }
  sendPDF(){
     
      let params = {

        nombre:this.datos.value.nombre,
        correo:this.datos.value.correo,
        compania:this.datos.value.compania,
        puesto:this.datos.value.puesto

      }

      console.log(params);
       
      //
      this.httpClient.post('http://localhost:3000/pdf',params).subscribe(resp=>{

        console.log(resp);
      });
    }
   getFile($event:any){

    console.log($event);
    const [file] = $event.target.files;
    console.log(file);
    this.fileTmp={
       fileRaw:file,
       fileName:file.name
    }
   }

   sendFile(){

    const body = new FormData();
    body.append('myFile',this.fileTmp.fileRaw, this.fileTmp.fileName);
    this.restService.sendPost(body).subscribe(res => console.log(res));
   }
    
}

