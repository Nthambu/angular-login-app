import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf,HttpClientModule,FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private http:HttpClient,private router:Router){}
  username:string='';
  email:string='';
  password:string='';
  confirmPassword:string='';
  errorMessage:string='';
  
  onRegister(){
    //let do some validation before storing user data
    if(this.password !==this.confirmPassword){
      this.errorMessage="passwords do not Match";
      return;//return false

    }
    const registrationData = {
      username:this.username,
      email:this.email,
      password:this.password,

    }
    this.http.post('https://jsonplaceholder.typicode.com/posts',registrationData).subscribe(
      (response:any) =>{
        alert('registration was successfull');
        this.router.navigate(['/login']);

        

      },
      (error) =>{
        this.errorMessage = 'server down!Try Again later';
        console.error('Error:',error);
      }
    )


  }

}
