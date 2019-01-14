import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accolades',
  templateUrl: './accolades.component.html',
  styleUrls: ['./accolades.component.scss']
})
export class AccoladesComponent implements OnInit {
  accolades = [
    {
        "image": "mcp.jpg",
        "title": "Microsoft Certified Professional Certificate",
        "description": "Microsoft Certified Professional Certificate"
    },
    {
        "image": "spcl.jpg",
        "title": "Microsoft Certified Specialist Certificate",
        "description": "Microsoft Certified Specialist in Programming in HTML5 with Javascript and CSS3."
    },
    {
        "image": "badge.png",
        "title": "MVA Know it. Prove it. Web Development Learning Challenge Badge",
        "description": "This badge proves that you have conquered the Web Development Learning Challenge.",
    }
]
  constructor() { }

  ngOnInit() {
  }

}
