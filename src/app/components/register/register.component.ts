import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(){}
  ngOnInit(): void { 
  }
  registerForm = new FormGroup({
    firstname: new FormGroup(""),
    lastname: new FormGroup(""),
    email: new FormGroup(""),
    address: new FormGroup(""),
    mobilenumber: new FormGroup(""),
    gender: new FormGroup("")
});

registerSubmit(){

  console.log(this.registerForm.value);
}
}
