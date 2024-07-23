import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutComponent } from './checkout.component';

export const route:Routes = [
    {
        path: '',
        component: CheckoutComponent
    }
]

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(route),
        NgxSkeletonLoaderModule
    ],
    providers: [

    ]
})
export class CheckoutModule { }
