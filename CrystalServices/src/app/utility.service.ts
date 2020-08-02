import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) { }

  convertDate(value){
    let date= moment(value).format('YYYY-MM-DD')
    if(date){
      return date;
    }
   

  }

  updateActivity(formData){
     let url="http://localhost:8080/CrystalServices/poc/addActivity";
     return this.http.post(url,formData)
  }
}
