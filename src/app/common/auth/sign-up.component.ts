import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { AuthService } from './auth.service';

@Component({
    templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
    firstName = '';
    lastName = '';
    email = '';
    password = '';

    constructor(
        //private router: Router,
       // private authService: AuthService,
    ) { }

    ngOnInit() {
    }

    signUp(): void {
        const newUser={
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
            if (newUser.firstName && newUser.lastName && newUser.email && newUser.password) 
            {
                        console.log(newUser);
                }
                else
                     console.log('Broken Form. Please enter a value in all fields');
                
            
    }

}