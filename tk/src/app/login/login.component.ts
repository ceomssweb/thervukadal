import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ButtonModule, 
    InputTextModule,  
    FormsModule, 
    ReactiveFormsModule
  ],
})
export class LoginComponent implements OnInit {
  ifMailReq: boolean = true;
  ifOTPReq: boolean = false;
  loginForm: FormGroup | any;
  value: string | any;
  passwordValue: string | any;
    
    submitted = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
        'login': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });
}

onSubmit() { 
    this.submitted = true;
    alert(JSON.stringify(this.loginForm.value));
}
showReg(){
  this.ifMailReq = false;
  this.ifOTPReq = false;
  debugger
}

}
