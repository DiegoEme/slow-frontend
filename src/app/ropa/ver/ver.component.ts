import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../service/ropa.service'
import { CartService } from '../../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
product;

  constructor(private ropa: RopaService, private cartService: CartService) { }

  lista = [];

  addToCart(product) {
    this.cartService.addToCart(product);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Prenda agregado al carrito',
      showConfirmButton: false,
      timer: 1000
    });
  }

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
