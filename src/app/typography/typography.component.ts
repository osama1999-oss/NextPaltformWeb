import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './../shared/services/admin-service.service';
import { owners } from './../shared/model/owners';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor( private adminServ:AdminServiceService) { }
  Owners:owners[]
    ngOnInit() {
  this.getBlokedOwners();
    }

  getBlokedOwners()
  {
    this.adminServ.getBlockedOwners().subscribe(
      res=> {
        this.Owners = res;
        console.log(this.Owners);
      }
    );
  }
  onChangeEvent(event: any){
    console.log(event.target.value);
    if(event.target.value == '')
    {
      this.getBlokedOwners();
      return;
    }
    this.adminServ.blockedOwnerSearch(event.target.value).subscribe(
      res => this.Owners = res
    )
  }
  onUnBlock(id:any){
    console.log(typeof(id));
    console.log(id);
    this.adminServ.unBlockOwner(id).subscribe(
      res => {
        console.log(res);
        this.getBlokedOwners();
      }
    );
  }
}
