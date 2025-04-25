import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiURL);
  }

  save(student:Student): Observable<Student>{
    return this.http.post<Student>(this.apiURL, student);
  } 

  deleteStudents(student:Student): Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${student.id}`);
  }

  update(student:Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiURL}/${student.id}`, student);
  }
}
