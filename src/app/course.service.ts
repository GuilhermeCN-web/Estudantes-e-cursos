import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiURL = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiURL);
  }

  save(course:Course): Observable<Course>{
    return this.http.post<Course>(this.apiURL, course);
  } 

  deleteCourses(course:Course): Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${course.id}`);
  }

  update(course:Course): Observable<Course>{
    return this.http.put<Course>(`${this.apiURL}/${course.id}`, course);
  }
}
