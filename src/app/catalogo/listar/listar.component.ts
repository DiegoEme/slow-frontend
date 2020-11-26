import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../service/catalogo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  constructor(private catalogo: CatalogoService) {}

  lista = [];

  ngOnInit(): void {
    this.catalogo.listaCatalogo().subscribe(
      (res) => {
        this.lista = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminar(eliminarPrenda) {
    this.catalogo.eliminarCatalogo(eliminarPrenda).subscribe(
      (res) => {
        const index = this.lista.indexOf(eliminarPrenda);
        if(index > -1){
          this.lista.splice(index, 1);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
