import { Component, OnInit } from '@angular/core';
import { PlayGroundApprovalView } from './../shared/model/playGroundApprovalView';
import { PlayGroundRequest } from './../shared/model/playGroundRequest';
import { AdminServiceService } from 'app/shared/services/admin-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor( private adminServ:AdminServiceService) { }
  playGoundRequest = new PlayGroundRequest();
    PlayGrounds:PlayGroundApprovalView[];
    imageUrl= 'http://localhost:12123/';
      ngOnInit() {
          this.GetPlayGroundApprovalViewModel();
      }
      GetPlayGroundApprovalViewModel()
      {
        this.adminServ.getPlayGroundApprovalView().subscribe(
          res=> {
            this.PlayGrounds = res;

            console.log(this.PlayGrounds);
            console.log(this.PlayGrounds[0].images);
          }
        );
      }
      onApprove(id)
      {
        console.log(id);
          this.playGoundRequest.id = id;
          this.playGoundRequest.status = true;
          console.log(this.playGoundRequest);
          this.adminServ.approve(this.playGoundRequest).subscribe(
            res=>{ console.log(res);
          this.GetPlayGroundApprovalViewModel();
            }
          )
      }
      onCancle(id){
        this.playGoundRequest.id = id;
        this.playGoundRequest.status = false;
        console.log(this.playGoundRequest);
        this.adminServ.approve(this.playGoundRequest).subscribe(
          res=>{ console.log(res);
        this.GetPlayGroundApprovalViewModel();
        alert('Cancled');
          }
        )
      }
}
