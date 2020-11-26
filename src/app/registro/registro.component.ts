import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  //Datos obtenidos del html
  registrarUsuario = {
    nombre: '',
    correo: '',
    pass: '',
  }

  ngOnInit(): void {
  }

  registrar(){
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        
          this.router.navigate(['/login']);
        
        
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
