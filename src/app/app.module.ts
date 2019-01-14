import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { from } from 'rxjs';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AccoladesComponent } from './accolades/accolades.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectComponent,
    SkillsComponent,
    EducationComponent,
    AccoladesComponent,
    CoverLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
