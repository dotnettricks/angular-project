import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorsComponent } from './mentors/mentors.component';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { TopicComponent } from './topic/topic.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'course', component: CourseComponent },
      { path: 'course/{id}', component: CourseComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'topic', component: TopicComponent },
      { path: 'topic/{id}', component: TopicComponent },
      { path: 'topics', component: TopicsComponent },
      { path: 'lesson', component: LessonComponent },
      { path: 'lesson/{id}', component: LessonComponent },
      { path: 'lessons', component: LessonsComponent },
      { path: 'mentors', component: MentorsComponent },
      { path: 'mentor', component: MentorComponent },
      { path: 'mentor/{id}', component: MentorComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
