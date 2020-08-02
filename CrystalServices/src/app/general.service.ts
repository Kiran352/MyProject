import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
   status:boolean;
  constructor(private http:HttpClient) { }

  doLogin(login):boolean{
    console.log("inside the service"+login)
  const url="http://localhost:8080/CrystalServices/poc/login"
     this.http.post(url,login).subscribe(
       (res:Response)=>{
         this.status=true;
       });
       return this.status;
  }
 
}
