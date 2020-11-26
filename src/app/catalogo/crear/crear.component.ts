import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router'
import { CatalogoService } from '../../service/catalogo.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private catalogo: CatalogoService) { }

  agregarPrenda = {
    nombre: '',
    descripcion: '',
  }

  ngOnInit(): void {
  }

  agregar(){
    this.catalogo.crearCatalogo(this.agregarPrenda).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
