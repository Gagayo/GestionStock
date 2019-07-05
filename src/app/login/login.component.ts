import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  credentials = {
    username: '',
    passoword: ''
  };

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

    this.createForm();
  }

  login(){
    this.authService.authenticate(this.credentials,() => {
        //console.log("Hello");
        this.router.navigateByUrl("/home/(contentOutlet:dashboard)");
    });
  }

  createForm(){

    this.loginForm = this.formBuilder.group({
      username:['', Validators.compose([Validators.required, Validators.minLength(3)]) ],
      password:['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
}
