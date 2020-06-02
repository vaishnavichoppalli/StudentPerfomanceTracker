import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../service/forgot-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

	resetpassword:FormGroup;
	message:string;
	message1:string;
  constructor(private formBuilder:FormBuilder,private service:ForgotPasswordService) { }

  ngOnInit() {
	this.resetpassword=this.formBuilder.group(
		{
			npassword:['',[Validators.required,Validators.minLength(6)]],
			cpassword:['',[Validators.required,Validators.minLength(6)]],
		}
	);
  }

get npassword(){
	return this.resetpassword.get('npassword');
}
get cpassword(){
	return this.resetpassword.get('cpassword');
}
	onSubmit()
	{
		this.message="";this.message1="";
		console.log(this.resetpassword.controls.npassword.value);
		this.service.changepassword(this.resetpassword.controls.npassword.value,this.resetpassword.controls.cpassword.value).
		subscribe(data=>
		{
			if(data){
				this.message="Password successfully changed.";
			}else{
				this.message1="Password change unsuccessful.";
			}
		});
	}
}
