import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NgModel } from '@angular/forms';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeicons-app';
}
