import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  sendPost(body:FormData){

     return this.http.post('http://localhost:3000/upload',body)
  }
}
