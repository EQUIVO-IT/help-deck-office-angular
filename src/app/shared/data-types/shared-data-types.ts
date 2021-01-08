
export interface CurrentUser {
  UserName: string;
  UserRole: string;
}

export interface UploadFinishedEventArgs {
  filePath: '' //Comes from server
}

export interface KeyValueDropDown {
  value: string;
  viewValue: string;
}

export interface IntKeyValueDropDown {
  id: number;
  routeId: string;
  value: string;
}
