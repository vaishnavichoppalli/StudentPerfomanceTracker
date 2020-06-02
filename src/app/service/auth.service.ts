import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	
	private url="http://localhost:8081";
  constructor(private http:HttpClient) {
 }
	getUser(email:string,password:string):Observable<Users>
	{
		return this.http.get<Users>(`${this.url}/getUser/`+email+`/`+password).pipe(catchError(this.errorHandle));;
	}
	
	logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    console.log(localStorage.getItem('isLoggedIn'));
    localStorage.removeItem('token');

  } 

	errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }
}
