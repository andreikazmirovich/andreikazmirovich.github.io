/*----------  Modules  ----------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

/*----------  Services  ----------*/
import { MyDataService } from './services/my-data.service';
import { EducationDataService } from './services/education-data.service';
import { CoursesDataService } from './services/courses-data.service';
import { JobExperienceDataService } from './services/job-experience-data.service';
import { ProjectsDataService } from './services/projects-data.service';

/*----------  Components  ----------*/
import { NavComponent } from './nav/nav.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { EducationComponent } from './education/education.component';
import { JobExperienceComponent } from './job-experience/job-experience.component';
import { CoursesComponent } from './courses/courses.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MyInfoComponent,
    EducationComponent,
    JobExperienceComponent,
    CoursesComponent,
    HomePageComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
        children: [
          {
            path: '',
            component: EducationComponent
          },
          {
            path: 'education',
            component: EducationComponent
          },
          {
            path: 'courses',
            component: CoursesComponent
          },
          {
            path: 'job',
            component: JobExperienceComponent
          }
        ]
      },
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ],
  providers: [
    MyDataService,
    EducationDataService,
    CoursesDataService,
    JobExperienceDataService,
    ProjectsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
