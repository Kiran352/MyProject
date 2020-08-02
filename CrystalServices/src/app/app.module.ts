import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';


import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';



import { MyActivityComponent } from './my-activity/my-activity.component';



const appRoute:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponentComponent},
  {path:'home',component:MyActivityComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponent,
    MyActivityComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    FormsModule,
    RouterModule.forRoot(appRoute)
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
