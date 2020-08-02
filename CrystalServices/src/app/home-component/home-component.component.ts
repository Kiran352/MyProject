import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {BcpTracker} from '../tracker';
import { from } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  
})
export class HomeComponentComponent implements OnInit {
start:Date;
headings=["Edit","BCP Date","Employee details","outage Type","Comments"]
trackers:object=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url="http://localhost:8080/CrystalServices/poc/getTracker";
     this.http.get<BcpTracker[]>(url).subscribe(
     data=>{
      this.trackers=data
       console.log(this.trackers)
    console.log(data)


   } );
  }

  onSubmit(f){
  
  }
}
