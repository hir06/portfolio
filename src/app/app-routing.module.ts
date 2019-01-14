import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component'
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component'
import { AccoladesComponent } from './accolades/accolades.component';
import { from } from 'rxjs';

const routes: Routes = [
    {
        path: 'about',
        component: HomeComponent
    },
    {
        path: 'work',
        component: ProjectComponent,
    },
    {
        path: 'skills',
        component: SkillsComponent,
    },
    {
        path: 'edu',
        component: EducationComponent,
    },
    {
        path: 'cover',
        component: CoverLetterComponent,
    },
    {
        path: 'accolades',
        component: AccoladesComponent
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
