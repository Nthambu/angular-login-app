import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tit:string='this is'
  courses:any[]=["course1","course2","course3"];
  myFun(){
    alert('hey');
  }
  ourcourses;
  // constructor(ourservice:CoursesService){
  //   this.courses = ourservice.getCourses();

  // }
 constructor(ourservice:CoursesService){
  
  this.ourcourses =ourservice.getCourses();

 }
  
}
