import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  loguear = {
    correo: '',
    pass: ''
  }

  ngOnInit(): void {
  }

  nuevaCuenta(){
    this.router.navigate(['/registro'])
  }

  login(){
    this.auth. loginUsuario(this.loguear).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/listarPrendas']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
