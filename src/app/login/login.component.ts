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

  login(){
    this.auth. loginUsuario(this.loguear).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
