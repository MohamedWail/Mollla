export class UserModel {
  constructor(
    public email:string,
    public id:string,
    public _token:string,
    public _tokenEpirationDate:Date

  ) {
  }
  get token(){
    if(!this._tokenEpirationDate||new Date()>this._tokenEpirationDate){
      return null;
    }

      return this._token;

  }
}
