import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactusComponent } from './contactus.component';

export const route:Routes = [
    {
        path: '',
        component: ContactusComponent
    }
]

@NgModule({
    declarations: [
        ContactusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class ContactUsModule { }
