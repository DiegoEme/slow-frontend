import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  agregarPrenda = {
    nombre: '',
    descripcion: ''
  }

  ngOnInit(): void {
  }

  agregar(){}
}
