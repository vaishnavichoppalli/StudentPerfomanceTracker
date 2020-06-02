import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from '../class/users';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup-and-activation',
  templateUrl: './signup-and-activation.component.html',
  styleUrls: ['./signup-and-activation.component.css']
})
export class SignupAndActivationComponent implements OnInit {

	signupForm:FormGroup;
	user:Users=new Users();
	user1:Users=new Users();
	message:string="";
	message1:string="";
	emailId:string;
  constructor(private formBuilder:FormBuilder,private service:SignupService) { }

  ngOnInit() {
	this.signupForm=this.formBuilder.group({
		name:['',[Validators.required,Validators.minLength(4)]],
		email:['',[Validators.required,Validators.email]],
		password:['',[Validators.required,Validators.minLength(6)]],
		address:['',[Validators.required]],
		phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
		role:['']
	});
  }
get address(){
	return this.signupForm.get('address');
}
get name(){
	return this.signupForm.get('name');
}
get email(){
	return this.signupForm.get('email');
}
get password(){
	return this.signupForm.get('password');
}
get role(){
	return this.signupForm.get('role');
}
get phoneNumber(){
	return this.signupForm.get('phoneNumber');
}
	signUp()
	{
		this.message="";
		this.message1="";
		this.user.email=this.signupForm.controls.email.value;
		this.user.name=this.signupForm.controls.name.value;
		this.user.password=this.signupForm.controls.password.value;
		this.user.phoneNumber=this.signupForm.controls.phoneNumber.value;
		this.user.address=this.signupForm.controls.address.value;
		//console.log(this.signupForm.controls.role.value);
		if(this.signupForm.controls.role.value==true)
		{
			this.user.role='m'
			//console.log(this.user.role);
		}else{
			this.user.role='c';
			//console.log(this.user.role);
		}
		console.log(this.user);
		this.service.register(this.user).subscribe(data=>{
			if(data!=null)
			{
				this.message="Email has been sent to the "+this.signupForm.controls.email.value+" for verification";
			}else
			{
				this.message1="Email id already exists.";
			}
		});
	}
}
