import { owners } from './../shared/model/owners';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './../shared/services/admin-service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
x:any;
  constructor( private adminServ:AdminServiceService) { }
  Owners:owners[]
    ngOnInit() {
  this.getOwners();
    }

  getOwners()
  {
    this.adminServ.getOwners().subscribe(
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
      this.getOwners();
      return;
    }
    this.adminServ.ownerSearch(event.target.value).subscribe(
      res => this.Owners = res
    )
  }
  onBlock(id:any){
    console.log(typeof(id));
    console.log(id);
    this.adminServ.blockOwner(id).subscribe(
      res => {
        this.x=res;
        console.log(res);
        console.log(this.x.results)
        this.getOwners();
      }
    );
  }

}
