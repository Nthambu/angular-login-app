import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NgModel } from '@angular/forms';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeicons-app';
}
