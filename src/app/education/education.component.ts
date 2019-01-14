import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
   education = [
    {
        "qualification": "B.Tech",
        "stream": "Computer Science",
        "marks": "8.2 CGPA",
        "passingYear": 2015,
        "institute": "DDIT Nadiad"
    },
    {
        "qualification": "Intermediate",
        "stream": "",
        "passingYear": 2011,
        "marks": 89,
        "institute": "K.K.parekh secondary & Higher secondary school"
    },
    {
        "qualification": "High School",
        "stream": "",
        "passingYear": 2009,
        "marks": 88.78,
        "institute": "S.S Ajmera Vidhyalaya"
    }
]
  constructor() { }

  ngOnInit() {
  }

}
