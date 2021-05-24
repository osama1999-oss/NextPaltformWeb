import { reservation } from './../shared/model/playGroundReservations';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'app/shared/services/admin-service.service';

declare const google: any;

 
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    constructor( private adminServ:AdminServiceService) { }
    Reservations:reservation[]
      ngOnInit() {
          this.getCurrentReservations();
      }
      getCurrentReservations()
      {
        this.adminServ.getCurrentReservations().subscribe(
          res=> {
            this.Reservations = res;
            console.log(this.Reservations);
          }
        );
      }
   
}
