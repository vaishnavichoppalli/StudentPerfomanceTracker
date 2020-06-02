  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Users } from '../class/users';

@Component({
  selector: 'app-login-logout-session',
  templateUrl: './login-logout-session.component.html',
  styleUrls: ['./login-logout-session.component.css']
})
export class LoginLogoutSessionComponent implements OnInit {
	user:Users=new Users();
	loginForm:FormGroup;
	message: string;
	message1: string;
	returnUrl: string;
  constructor(private formBuilder:FormBuilder,public authService: AuthService,private router: Router) { }

  ngOnInit() {
	 this.loginForm=this.formBuilder.group({
		email:['',[Validators.required,Validators.email]],
		password:['',[Validators.required,Validators.minLength(6)]]
	});
	this.returnUrl = '/customer-page';
    this.authService.logout();
  }

get email(){
	return this.loginForm.get('email');
}
get password(){
	return this.loginForm.get('password');
}
	onSubmit(){
		//console.log(this.loginForm.value);
		this.message="";this.message1="";
		this.user.email=this.loginForm.controls.email.value;
		this.user.password=this.loginForm.controls.password.value;
		//console.log(this.user);
		this.authService.getUser(this.user.email,this.user.password).subscribe(
			user1=>
			{
				
				if(user1)
				{
					this.message="Login Successful.";
					localStorage.setItem('isLoggedIn', "true");
        			localStorage.setItem('token', this.loginForm.controls.email.value);
					if(user1.role=="c"){
       			 	this.router.navigate([this.returnUrl]);
					}else if(user1.role=="m"){
						this.router.navigate(['/merchant-page']);
					}else if(user1.role=="a"){
						this.router.navigate(['/admin-page']);
					}
				}else
				{
					this.message1="Invalid Credentials.";
				}
				
			}
		);
		
	}
}
