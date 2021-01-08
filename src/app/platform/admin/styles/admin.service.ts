import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endpointBase = environment.endpointBase;
  constructor(private _httpClient: HttpClient) { }

  addSupportmember(payload) {
    return this._httpClient.post(this.endpointBase.concat("HelpDeskAccount/SupportMember/Add"), payload,
      { reportProgress: true, observe: "events" })
  }

  getAllSupportMembers() {
    return this._httpClient.get(this.endpointBase.concat("HelpDeskAccount/SupportMember/GetAll"),
      { reportProgress: true, observe: "events" })
  }

  addHospital(payload) {
    return this._httpClient.post(this.endpointBase.concat("HelpDeskAccount/SupportMember/Add"), payload,
      { reportProgress: true, observe: "events" })
  }

  getAllHospitals() {
    return this._httpClient.get(this.endpointBase.concat("HelpDeskAccount/SupportMember/GetAll"),
      { reportProgress: true, observe: "events" })
  }


}
