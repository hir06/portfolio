import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isActive = 'Home';
  navLinks=[ {
    name: "Home",
    link: ""
  },
  {
    name: "Skills",
    link: "skills"
  },
  {
    name: "Works",
    link: "work"
  },
  {
    name: "Education",
    link: "edu"
  },
  {
    name: "Accolades",
    link: "accolades"
  },
  {
    name: "Cover Letter",
    link: "cover"
  }
  ];

  //updates active link for header
  updateActiveHeader(item) {
    this.isActive = item.name;
  }
  ngOnInit() {
  }

}
