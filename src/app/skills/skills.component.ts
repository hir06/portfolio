import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    skills= [
    {
        "skill": "JavaScript",
        "rating": 8
    },
    {
        "skill": "AngularJS",
        "rating": 7
    },
    {
      "skill": "Angular 2+",
      "rating": 7
  },
    {
        "skill": "HTML5",
        "rating": 9
    },
    {
        "skill": "CSS",
        "rating": 7
    },
    {
        "skill": "SCSS",
        "rating": 6
    },
    {
        "skill": "BootStrap",
        "rating": 7
    },
    {
        "skill": "Materialize CSS",
        "rating": 7
    },
    {
        "skill": "jQuery",
        "rating": 7
    }
]
  constructor() { }

  ngOnInit() {
  }

}
