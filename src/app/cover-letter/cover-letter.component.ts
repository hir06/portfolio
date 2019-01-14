import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  coverLetter= {
    "greeting": "Dear Sir/Mam,",
    "opening": "If you are searching for a software engineer with a proven ability to develop high-performance applications and technical innovations, then please consider my resume.",
    "start": "Since 2015, I have served as a Software Engineer/Web Developer for Infosys Ltd., where I have been repeatedly recognized for developing quality solutions for complex real world problems. I am responsible for full lifecycle development of software/application, from initial requirement gathering to design, coding, testing, documentation and implementation.",
    "skills": "Known for excellent problem solving skills and time management. I have participated in proposals and presentations that have helped grab various projects. I also excel in merging business and user needs into high-quality solutions while keeping within delivery timeline and  constraints. My technical expertise includes cross-platform proficiency (Windows, Unix, Linux). Fluency in various web technologies (including  HTML5, CSS, JavaScript, AngularJS, jQuery, ASP.NET and SQL); and good knowledge of developer applications, tools, methodologies and best practices (including OOD, client/server architecture and self-test automation).",
    "close": "As mentioned, I believe that my years of experience designing computer software, problem solving skills and my strong educational background can be an asset to your organization. I  would appreciate it if you would keep me in mind for future openings. Thank you for going through my profile. I look forward to speak with you. Please contact at (+91) 8899-503807 or manishjanky@gmail.com if you have any questions."
}
  constructor() { }

  ngOnInit() {
  }

}
