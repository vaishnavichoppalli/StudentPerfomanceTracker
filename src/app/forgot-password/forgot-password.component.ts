import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from '../class/users';
import { ForgotPasswordService } from '../service/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
	user:Users=new Users();
	forgotpassword:FormGroup;
	message: string;
	message1: string;
  constructor(private formBuilder:FormBuilder,private service:ForgotPasswordService) { }

  ngOnInit() {
	 this.forgotpassword=this.formBuilder.group({
		email:['',[Validators.required,Validators.email]]
	});
  }

	get email(){
	return this.forgotpassword.get('email');
}
	onSubmit()
	{
		this.message="";this.message1="";
		this.user.email=this.forgotpassword.controls.email.value;
		console.log(this.user.email);
		this.service.forgotpassword(this.user.email).subscribe(data=>
		{
			if(data)
			{
				this.message="Email sent to change password";	
			}else{
				this.message1="Email id is not registered";
			}
		}
		)
	}
}
