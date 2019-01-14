import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialProfiles = {
    "facebook": "https://www.facebook.com/hiral.parmar.730",
    "github": "https://github.com/hir06",
    "linkedin": "https://www.linkedin.com/in/hiral-parmar-59735380/",
    "stackOverFlow": "https://stackoverflow.com/users/5751609/hiral",
}
interests = [
  "Comics",
  "Travelling",
  "Dance",
  "Table Tennis"
]
user = {
  name: "Hiral Parmar",
  designation: "UI Developer"
}
  constructor() { }

  ngOnInit() {
  }

}
