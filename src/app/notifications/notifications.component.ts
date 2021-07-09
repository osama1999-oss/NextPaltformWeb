import { Component, OnInit } from '@angular/core';
import { PlayGroundView } from './../shared/model/playGroundView';
import { AdminServiceService } from './../shared/services/admin-service.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
dataNow:string;
  constructor( private adminServ:AdminServiceService) { 
    this.dataNow = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }
  playGrounds:PlayGroundView[]
    ngOnInit() {
  this.getPlayGrounds();
    }

    getPlayGrounds()
  {
    this.adminServ.getPlayGrounds().subscribe(
      res=> {
        this.playGrounds = res;
        console.log(this.playGrounds);
      }
    );
  }
}
