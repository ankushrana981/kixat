import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StaticPageComponent } from './static-page.component';

export const route:Routes = [
    {
        path: '',
        component: StaticPageComponent
    }
]

@NgModule({
    declarations: [
        StaticPageComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class StaticPageModule { }
