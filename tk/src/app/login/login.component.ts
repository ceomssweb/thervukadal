import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ButtonModule, 
    InputTextModule,  
    FormsModule, 
    ReactiveFormsModule,
    AutoFocusModule,
    SplitterModule
  ],
})
export class LoginComponent implements OnInit {
  ifMailReq: boolean = true;
  ifOTPReq: boolean = false;
  ifRegister: boolean = false;
  loginForm: FormGroup | any;
  registerForm: FormGroup | any;
  value: string | any;
  passwordValue: string | any;
  conPasswordValue: string | any;
    
    submitted = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
        'login': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });
    this.registerForm = new FormGroup({
      'registerName': new FormControl('', Validators.required),
      'passwordNew': new FormControl('', Validators.required),
      'conPassword': new FormControl('', Validators.required)
  });
}

onLogin() { 
    this.submitted = true;
    alert(JSON.stringify(this.loginForm.value));
}
onRegister() { 
  this.submitted = true;
  alert(JSON.stringify(this.registerForm.value));
}
showReg(){
  this.ifMailReq = false;
  this.ifOTPReq = false;
  this.ifRegister = true;
}
showOTP(){
  this.ifMailReq = false;
  this.ifOTPReq = true;
  this.ifRegister = false;
}
showMail(){
  this.ifMailReq = true;
  this.ifOTPReq = false;
  this.ifRegister = false;
}

}
