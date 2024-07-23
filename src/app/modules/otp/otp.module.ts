import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OtpComponent } from './otp.component';

export const route: Routes = [
    {
        path: '',
        component: OtpComponent
    }
]

@NgModule({
    declarations: [
        OtpComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class OTPModule { }
