import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
    firstName = '';
    lastName = '';
    phoneNumber ='';
    email = '';
    password = '';



    constructor(
       private router: Router,
       private authService: AuthService) { }

     signUp(): void {
        const newUser={
            firstName: this.firstName,
            lastName: this.lastName,
            //phoneNumber: this.phoneNumber,
            email: this.email,
            password: this.password,
        };
            if (newUser.firstName && newUser.lastName && newUser.email && newUser.password) 
            {          console.log(newUser);
                        this.authService.signup(newUser.firstName,newUser.lastName,newUser.email,newUser.password).subscribe((response)=>
                        {
                            this.router.navigateByUrl('/login');
                        });
            }
                else
                     console.log('Broken Form. Please enter a value in all fields');
                
            
    };

};
