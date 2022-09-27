import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authSubject=new Subject<boolean>();
  public authad=new Subject<boolean>();
  public uname=new Subject<any>();
  public amt=new Subject<any>();

  validateAuth(data:boolean){
    this.authSubject.next(data);
    
  }
  validateAdmin(data:boolean){

    this.authad.next(data);
  }
  getuname(data:any){

    this.uname.next(data);
  }
  amount(data:any){

    this.amt.next(data);
  }
  hosturl=environment.userapi;
  
  value?:boolean;
  getamt?:string;
    getAuthStatus(){
    this.authSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );

    this.authad.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );

    return this.value;
  }
  n?:any;
  getUname(){
    this.uname.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.n= data;
        console.log('inside user service 11: ' + this.value);
      }
    );

    return this.n;
  }

  getamount(){
    this.amt.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.getamt= data;
        console.log('inside user service 11: ' + this.value);
      }
    );

    return this.n;
  }


  constructor() { }
}
