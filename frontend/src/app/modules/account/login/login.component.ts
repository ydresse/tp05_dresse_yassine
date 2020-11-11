import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

import { AccountService } from "../account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  get login(): AbstractControl {
    return this.loginForm.get("login");
  }
  get password(): AbstractControl {
    return this.loginForm.get("password");
  }

  onSubmit() {
    this.accountService
      .login(this.login.value, this.password.value)
      .subscribe(response => {
        if (response.body.success == true) {
          window.localStorage.setItem(
            "token",
            response.headers.get("authorization")
          );
        } else {
          console.log("error");
        }
      });
  }
}
