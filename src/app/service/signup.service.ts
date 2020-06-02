import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../class/users';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

	private url="http://localhost:8081";
  constructor(private http:HttpClient) { }

	register(user:Users):Observable<Users>
	{
		return this.http.post<Users>(`${this.url}/register`,user).pipe(catchError(this.errorHandle));;
	}
	errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }
}
