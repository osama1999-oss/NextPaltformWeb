import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{adminAuthenticationDto} from '../model/adminauthentication';
import { PlayGroundRequest } from '../model/playGroundRequest';

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {
  apiAuthenticationUrl=environment.myApi+ 'Authentication/AdminAuthenticate';
  apiAdminUrl=environment.myApi+ 'Admin/';
  apiPlayGroundUrl=environment.myApi+ 'PlayGround/';
 constructor(private http:HttpClient) { }
  login(adminAuthenticationDto: adminAuthenticationDto): Observable<any>{
    return this.http.post(this.apiAuthenticationUrl ,adminAuthenticationDto)
  }
  getUsers():Observable<any>{
    return this.http.get(this.apiAdminUrl + 'GetUsers')
  }
  getOwners():Observable<any>{
    return this.http.get(this.apiAdminUrl + 'GetOwners')
  }

  getBlockedOwners():Observable<any>{
    return this.http.get(this.apiAdminUrl + 'GetBlockedOwners')
  }
  
  blockOwner(ownerId:string)
  {
    return this.http.get(this.apiAdminUrl + 'BlockOwner/'+ownerId )
  }
  unBlockOwner(ownerId:string)
  {
    return this.http.get(this.apiAdminUrl + 'UnBlockOwner/'+ownerId )
  }
  getCurrentReservations():Observable<any>{
    return this.http.get(this.apiPlayGroundUrl + 'GetCurrentReservations')
  }
  getPlayGroundApprovalView():Observable<any>{
    return this.http.get(this.apiPlayGroundUrl + 'GetPlayGroundApprovalViewModel')
  }
  approve(request:PlayGroundRequest):Observable<any>{
    console.log(request);
    return this.http.post(this.apiAdminUrl + 'PlaygroundApproval',request)
  }
  getPlayGrounds():Observable<any>{
    return this.http.get(this.apiPlayGroundUrl + 'GetAllPlayGrounds')
  }
}