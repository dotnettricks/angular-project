import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { UserLayoutComponent } from './shared/user-layout.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
