import { Component, OnInit, VERSION } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  userForm: FormGroup;
  users: FormArray

  constructor(private cartService: CartService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      users: this.fb.array([])
    })
  }

  createUserForm(){
    return this.fb.group({
      firstname: ''
    })
  }

  adduser(){
    this.users = this.userForm.get('users') as FormArray;
    this.users.push(this.createUserForm());
  }
}
