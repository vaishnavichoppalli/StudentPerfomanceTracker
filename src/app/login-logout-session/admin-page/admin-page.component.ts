import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

	id: string;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
	this.id = localStorage.getItem('token');
  }
logout(): void {
    console.log("Logout");
    this.authService.logout();
	alert("Are you sure you want to logout");
   	window.location.replace("/");
  }

}
