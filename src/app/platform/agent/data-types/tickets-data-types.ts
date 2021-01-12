export interface Ticket{
  id:number;
  receivedDateTimeStamp:string;
  lastUpdatedDateTimeStamp:string;
  sender:string;
  hospital:string;
  subject:string;
  body:string;
  state:number;
}
