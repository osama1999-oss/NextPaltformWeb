import { AdminServiceService } from "./../shared/services/admin-service.service";
import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { adminAuthenticationDto } from "../shared/model/adminauthentication";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  name: "";
  password: "";
  admin = new adminAuthenticationDto();
  constructor(private adminServ: AdminServiceService,private _router: Router) {
    this.name = "";
    this.password = "";
  }

  ngOnInit() {
    Adminlogin: null;
  }

  login() {
    console.log(this.name);
    console.log("login");

    this.admin.name = this.name;
    this.admin.password = this.password;
    console.log(this.admin);  
    this.adminServ.login(this.admin).pipe(
      catchError(err => {
          return throwError(err);
      })
  ).subscribe(
    res => {
      console.log('HTTP response', res)
      if(res.admin == "unauthorized")
      {
        alert("Email Or Password Is Invalid");
      }
      else{
        this._router.navigate(['dashboard']);
      }
  },
    err =>{ console.log('HTTP Error', err)
    alert(err)}
    );
  }
}
