import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  private listaUrl = 'http://localhost:3000/api/catalogo/lista';
  private crearUrl = 'http://localhost:3000/api/catalogo';
  private imgUrl =  'http://localhost:3000/api/catalogo/cargarArchivo';

  listaCatalogo(){
    return this.http.get<any>(this.listaUrl);
  }

  crearCatalogo(catalogo){
    return this.http.post<any>(this.crearUrl, catalogo);
  }
  editarCatalogo(catalogo){
    return this.http.put<any>(this.crearUrl, catalogo);
  }

  eliminarCatalogo(catalogo){
    const _id = catalogo._id;
    const url = `${this.crearUrl}/${_id}`;
    return this.http.delete<any>(url);
  }

  crearPrendaImg(catalogo){
    return this.http.post<any>(this.imgUrl, catalogo);
  }
}
