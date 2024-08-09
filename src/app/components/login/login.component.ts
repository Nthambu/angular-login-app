import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule,NgIf], // <-- Add FormsModule here
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts', loginData).subscribe(
      (response: any) => {
        if (response === 'Login successful') {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        this.errorMessage = 'Unable to connect to the server. Please try again later.';
        console.error('Error:', error);
      }
    );
    
    
  }
}
