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
    return this._httpClient.post(this.endpointBase.concat("HelpDeskHospitals/Add"), payload,
      { reportProgress: true, observe: "events" })
  }

  getAllHospitals() {
    return this._httpClient.get(this.endpointBase.concat("HelpDeskHospitals/GetAll"),
      { reportProgress: true, observe: "events" })
  }

  updateHospitals(payload,hospitalId){
    return this._httpClient.post(this.endpointBase.concat("HelpDeskHospitals/Update/"+hospitalId),payload,
    { reportProgress: true, observe: "events" })
  }

  deleteHospital(hospitalId){
    return this._httpClient.delete(this.endpointBase.concat("HelpDeskHospitals/Delete/" + hospitalId),
    { reportProgress: true, observe: "events" })
  }


}
