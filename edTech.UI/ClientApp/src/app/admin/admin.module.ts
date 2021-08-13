import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './shared/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from '../services/course.service';
import { NgxSummernoteModule } from 'ngx-summernote';
import { MentorComponent } from './mentor/mentor.component';
import { MentorsComponent } from './mentors/mentors.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topic/topic.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        NgxSummernoteModule
    ],
    exports: [],
    declarations: [
        AdminLayoutComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        CoursesComponent,
        CourseComponent,
        MentorComponent,
        MentorsComponent,
        TopicsComponent,
        TopicComponent,
        LessonComponent,
        LessonsComponent
    ],
    providers: [CourseService],
})
export class AdminModule { }
