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

  elegirImg: File = null;

  subirArchivo(event){
    this.elegirImg = <File>event.target.files[0];
  }

  crearImg(){
    const miFile = new FormData();
    miFile.append('nombre', this.agregarPrenda.nombre);
    miFile.append('descripcion', this.agregarPrenda.descripcion);
    miFile.append('sticker', this.elegirImg, this.elegirImg.name);
    this.catalogo.crearPrendaImg(miFile).subscribe(
      (res) => {
        this.router.navigate(['/listarPrendas']);
      },
      (err) => {
        console.log(err);
      }
    )
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
