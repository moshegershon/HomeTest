import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private serviceService: ServiceService , private router: Router) {
    this.user = {
      name: '',
      password: '',
    }
  }


  ngOnInit() {
  }
  login() {
    if (this.user.name == 'admin') {
      if (this.user.password == 'admin') {
        this.router.navigate(['/secure']);
      };
    }
    else{
alert('You are unauthorized');
    }
  };
 
  

};
