import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor(private http: HttpClient) { }

  private listaUrl = 'http://localhost:3000/api/ropa/lista';
  private crearUrl = 'http://localhost:3000/api/ropa/';
  private imgUrl = 'http://localhost:3000/api/ropa/cargarArchivo';

  listaRopa(){
    return this.http.get<any>(this.listaUrl);
  }

  crearRopa(ropa){
    return this.http.post<any>(this.crearUrl, ropa);
  }

  crearRopaImg(ropa){
    return this.http.post<any>(this.imgUrl, ropa);
  }
}
