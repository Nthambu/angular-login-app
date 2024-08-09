import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
courses:any[]=['course 1','course 2','course3'];
getCourses(){
  return this.courses;
}
}
