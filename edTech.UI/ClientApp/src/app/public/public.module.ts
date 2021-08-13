import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public.routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourselistComponent } from './shared/courselist/courselist.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CourseComponent } from './course/course.component';
import { PlayerComponent } from './player/player.component';
import { FullLayoutComponent } from './shared/fulllayout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PublicRoutingModule
    ],
    exports: [],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        FullLayoutComponent,
        LoginComponent,
        SignupComponent,
        UnauthorizeComponent,
        NotfoundComponent,
        CourselistComponent,
        HomeComponent,
        CoursesComponent,
        CartComponent,
        PaymentComponent,
        ReceiptComponent,
        CourseComponent,
        PlayerComponent
    ],
    providers: [],
})
export class PublicModule { }
