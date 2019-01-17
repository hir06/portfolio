import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
        "name": "Innovation Profiler Manager",
        "description": "This is web based application which is fully responsive works very well with all browsers all devices Representing collected data in visual forms(graphs) , showing details of the product with different filtering and searching functionalities like e-Commerce app.",
        "technologies": "Angular 7, scss, HTML, polymer, redux, rxjs",
        "duration": "1+ year",
        "roles": "working on agile methodology taking care of ui completely managing other dependencies related to ui like polymer or any third party library we are consuming, ensuring that application is fully responsive and supports all browsers, APIs integration, store, unit testing",
        "organization": "Pramati Technologies"
    },
    {
        "name": "DMMG",
        "description": "This is a web based application exposed to another business layer this application allows user to analyze different part of engines and customize their own product we display warehouse of different parts of engines user can add items to their cart or favourites list we provide option of shared cart as well",
        "technologies": "JavaScript, CSS, HTML5, BootStrap, Angular js",
        "duration" : "4 months",
        "roles": "Requirements analysis, requirments gathering, brain storming, coding, code review, testing",
        "organization": "Infosys"
    },
    {
        "name": "Workflow Applications",
        "description": "Migration project which includes numerous of application to convert into intellectual responsive app",
        "technologies": "JavaScript, CSS, HTML5, BootStrap, Angular js, . NET, workflowgen, SQL, Jquery",
        "duration": "1+ year",
        "roles": "UX reviewer, helping to finalize prototypes, converting it into web pages, learning existing application workflow for migrartion, coding, code review, testing",
        "organization": "Infosys",
        "link": "https://angel.co/projects/561128-workflow-applications?src=user_profile"
    },
    {
        "name": "Design Portal - MOS",
        "description": "This is a web app which consumes restful APIS to display items, item details, add items to cart and display the details of the cart.",
        "technologies": "CSS, HTML5, JavaScript, Angular js",
        "duration": "3 months",
        "roles": "converting PSD to web pages,making app responsive, API integration, intellectual design",
        "organization": "Infosys"
    },
    {
        "name": "AssetSyncer",
        "description": "Cross platform desktop app which is developed in elctron/node.js, which syncs data from server to local machine and automatically syncs data after a certain interval",
        "technologies": "elctron, node.js, HTML, css, vanila js",
        "duration": "3 months",
        "organization": "Infosys",
        "roles" : "created appliction from scratch and deliverd in 3 months with interactive design"
    },
    {
        "name": "Food vendor app",
        "description": "web app which helps user for food purchase through ecash within organization",
        "technologies": "Angular, HTML5, CSS, JavaScript",
        "duration": "3 months",
        "organization": "Charitable trust",
        "link": "https://angel.co/projects/561123-food-vendor-app?src=user_profile"
    },
    {
        "name": "Risk management system",
        "description": "a web app which helps to log an incident, asset management, compliance management, learning management",
        "technologies": "Angular 5, HTML5, SCSS, JavaScript",
        "duration": "2 months",
        "organization": "RMS - part time",
        "link": "https://angel.co/projects/888804-rms-risk-management-system?src=user_profile"
    
    }, 
    {
      "name": "Static Quiz in angular js",
      "description": "Hacathon application/ 3-4 hrs workshop",
      "link": "https://hir06.github.io/Quiz-in-angular/"
    },
    {
      "name": "SPA Google Map API",
      "description": "Hacathon application, Consuming google map API to display location and search it (static)",
      "link": "https://hir06.github.io/GoogleMapAng/map/"
    },
    {
      "name": "SPA Tile game",
      "description": "Hacathon application, Tile Game in Vanila JS : A simple tile game developed in Vanila Js",
      "link": "https://hir06.github.io/Tile-game-in-JS/"
    },
    {
      "name": "SPA Movie Dashboard",
      "description": "Hacathon application, Movie Dashboard: An app which displays movie detail and give download link",
      "link": "https://angel.co/projects/561131-movie-dashboard?src=user_profile"
    },
    {
      "name": "SPA Bloggers",
      "description": "Hacathon application,simple app created with react js which list down blog posts and give detail about it",
      "link": "https://angel.co/projects/561137-bloggers?src=user_profile"
    }
  
]
  constructor() { }

  ngOnInit() {
  }

}
