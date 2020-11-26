import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../service/ropa.service'

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  constructor(private ropa: RopaService) { }

  lista = []

  ngOnInit(): void {
    this.ropa.listaRopa().subscribe(
      (res) => {
        this.lista = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  

}
