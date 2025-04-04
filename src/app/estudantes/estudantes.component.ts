import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './estudantes.component.html',
  styleUrl: './estudantes.component.css'
})
export class EstudantesComponent implements OnInit {

  students: Student[] = [];

  constructor(private service: StudentService){}

  ngOnInit(): void {
    this.service.getStudents().subscribe({
        next: json => this.students = json
    })
  }

}
 