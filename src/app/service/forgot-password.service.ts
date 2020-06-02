import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

	private url="http://localhost:8081";
  constructor(private http:HttpClient) { }
	
	forgotpassword(email:string){
		return this.http.get<boolean>(`${this.url}/forgotpassword/`+email);
	}
	
	changepassword(nPassword:string,cPassword:string){
		return this.http.get<boolean>(`${this.url}/resetpassword/${nPassword}/${cPassword}`);
	}
}
