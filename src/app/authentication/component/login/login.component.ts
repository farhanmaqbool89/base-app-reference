import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forgotPassword = false;
  buttonCheck = true;


  user = {
    username: null,
    password: null
  }
  constructor() { }

  ngOnInit() {
  }

  test() {
    if (this.user.username === null || this.user.username === "" || this.user.password === null || this.user.password === "") {
      this.buttonCheck = true;
    }
    else {
      this.buttonCheck = false;
    }

  }

}
