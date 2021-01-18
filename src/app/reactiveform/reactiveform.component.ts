import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],

  
})
export class ReactiveformComponent implements OnInit {
  userForm = new FormGroup({
    nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.email,Validators.required]),
  });
 
  constructor() { }

  ngOnInit():void { 
    this.userForm= new FormGroup({
      nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
      mail: new FormControl('',[Validators.email,Validators.required]),
      payementInformations : new FormGroup({
        typeCarte: new FormControl(),
        numero: new FormControl(),
        dateExpiration: new FormControl(),
        code: new FormControl(),
    })
   
  })

  }
    email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  
  affiche() {
    console.log(this.userForm.value);

  }
}
