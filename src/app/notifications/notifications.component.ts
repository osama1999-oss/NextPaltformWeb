import { Component, OnInit } from '@angular/core';
import { PlayGroundView } from './../shared/model/playGroundView';
import { AdminServiceService } from './../shared/services/admin-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor( private adminServ:AdminServiceService) { }
  playGrounds:PlayGroundView[]
    ngOnInit() {
  this.getPlayGrounds();
    }

    getPlayGrounds()
  {
    this.adminServ.getPlayGrounds().subscribe(
      res=> {
        this.playGrounds = res;
      }
    );
  }
}
