import { Router } from '@angular/router';
import { Component, isStandalone } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
    standalone:true,
    imports:[FormsModule,HttpClientModule,NgIf],
    templateUrl:'./dashboard.component.html',
    styleUrl:'./dashboard.component.css'
  })
export class DashboardComponent{
constructor(private http:HttpClient,private router:Router){}
 username:string='';
 password:string='';
 errorMessage:string='';
 
//let have a method that will collect login data
onSubmit(){
  //we have this object that stores data
  let loginData={
    username:this.username,
    password:this.password
   }
   //let now send the data to the server
   //we have already created an instance of our service:httpClient
   //now our data is sent to the server using post method.let use subscribe method to receive feedback from the server
   //the subsribe has two properties.the response and the error property or fields
   //we shall make the two fields a arrow function:callback function
   this.http.post('https://jsonplaceholder.typicode.com/post',loginData).subscribe(
    (response:any)=>{
      if(response==='Login Successfull'){
        this.router.navigate(['/homepage']);
      }else{
        this.errorMessage='invalid username or password!';
      }

    },
    (error)=>{
      //if we face the error communicating with the server
      this.errorMessage = "server down!Try again later";
      console.log("Error:",error);
    }
   )
   

}
  }