import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string='';
  status:boolean;
  show:boolean=false;
  loginObject:object={};
  constructor(private router:Router,private http:HttpClient) { }
  ngOnInit(): void {
  }

  onSubmit(f){
    
    
     console.log(f.value)
     this.loginObject={
       "user_name":f.value.user_name,
       "password":f.value.password
     }
     const url="http://localhost:8080/CrystalServices/poc/login"
      this.http.post(url,this.loginObject).subscribe(
        data=>{
          console.log(data)
          this.status=<boolean>data
          console.log(this.status)
          if(data==true){
            this.router.navigate(['/home'])
           }else{
               this.show=true
               this.router.navigate([''])
           }
        }
      )
       console.log(this.status)
       
   
  }
}
