import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { LayoutComponent } from './shared/layout.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { PlayerComponent } from './player/player.component';
import { FullLayoutComponent } from './shared/fulllayout.component';

const routes: Routes = [
  {
    path: '', component: FullLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'player', component: PlayerComponent }     
    ]
  },
  {
    path: '', component: LayoutComponent, children: [    
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'unauthorize', component: UnauthorizeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'course', component: CourseComponent },
      // { path: 'player', component: PlayerComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'receipt', component: ReceiptComponent },
      { path: 'cart', component: CartComponent },
      { path: 'notfound', component: NotfoundComponent },
      { path: '**', redirectTo: '/notfound' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
