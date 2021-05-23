import { AdminServiceService } from './../shared/services/admin-service.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
 import {adminAuthenticationDto} from '../shared/model/adminauthentication'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name :'';
password:'';
admin = new adminAuthenticationDto();
  constructor( private adminServ:AdminServiceService) { }

  ngOnInit() {
  Adminlogin : null;
  }

login(){
  this.admin.name = this.name;
  this.admin.password =this.password;
  console.log(this.admin );
  this.adminServ.login(this.admin).subscribe(
    res => console.log(res)
  );

}


}
