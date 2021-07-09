import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{adminAuthenticationDto} from '../model/adminauthentication';
import { PlayGroundRequest } from '../model/playGroundRequest';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {
  apiAuthenticationUrl=environment.myApi+ 'Authentication/AdminAuthenticate';
  apiAdminUrl=environment.myApi+ 'Admin/';
  apiPlayGroundUrl=environment.myApi+ 'PlayGround/';
  apiStatisticsUrl=environment.myApi+ 'Statistics/';
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
  // getPlayGrounds():Observable<any>{
  //   return this.http.get(this.apiPlayGroundUrl + 'GetAllPlayGrounds')
  // }
  getPlayGrounds():Observable<any>{
    return this.http.get('http://osamahamdy-001-site1.htempurl.com/api/PlayGround/GetAllPlayGrounds')
  }
  getStatisticsOfReservations():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'StatisticsOfReservations')
  }
  getDailyStatisticsOfReservations():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'DailyStatisticsOfReservations')
  }
  getPlayGroundStatusStatistics():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'PlayGroundStatusStatistics')
  }
  getPlayGroundsCount():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'GetPlayGroundsCount')
  }
  getPlayGroundApprovalCount():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'GetPlayGroundApprovalCount')
  }
  getUsersCount():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'GetUsersCount')
  }
  getOwnersCount():Observable<any>{
    return this.http.get(this.apiStatisticsUrl + 'GetOwnersCount')
  }
  ownerSearch(search:string):Observable<any>{
    return this.http.get(this.apiAdminUrl + 'OwnerSearch/'+search)
  }
  userSearch(search:string):Observable<any>{
    return this.http.get(this.apiAdminUrl + 'UserSearch/'+search)
  }
  blockedOwnerSearch(search:string):Observable<any>{
    return this.http.get(this.apiAdminUrl + 'BlockedOwnerSearch/'+search)
  }
  
}
