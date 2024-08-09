import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  courses;
  constructor(){
    let storage = new CoursesService();
    this.courses = storage.getCourses();
  }

}
