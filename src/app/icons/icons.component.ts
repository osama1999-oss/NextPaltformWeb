import { user } from './../shared/model/users';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './../shared/services/admin-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor( private adminServ:AdminServiceService) { }
Users:user[]
  ngOnInit() {
this.getUsers();
  }
getUsers()
{
  this.adminServ.getUsers().subscribe(
    res=> {
      this.Users = res;
      console.log(this.Users);
    }
  );
}
onChangeEvent(event: any){
  console.log(event.target.value);
  if(event.target.value == '')
  {
    this.getUsers();
    return;
  }
  this.adminServ.userSearch(event.target.value).subscribe(
    res => this.Users = res
  )
}
}
