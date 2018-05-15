import { AppRegExpressionsConfig } from './../../providers/literals/app.regularExp';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {


    imgPrePath: string = '../../assets/img/';
    activeClass: string = 'login';
    loginFg: FormGroup;
    signupFg: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initialiseLoginForm();
        this.initialiseSignupForm();
    }

    initialiseLoginForm() {
        this.loginFg = this.fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.nameValidator)])],
            'password': [null, Validators.required]
        })
    }

    initialiseSignupForm() {
        this.signupFg = this.fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.nameValidator)])],
            'mobile': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.mobile)])],
            'password': [null, Validators.required]
        })
    }

    //to set Active class
    type(classType) {
        this.activeClass = classType;
    }

    navigateToMain() {
        this.router.navigateByUrl('/main');
    }

    //on click of Login button
    onLogin() {
        console.log(this.loginFg.value);
    }

    // on click of signup
    onSignup() {
        console.log(this.signupFg.value);
    }
}
