import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details.component';

export const route:Routes = [
    {
        path: '',
        component: ProductDetailsComponent
    }
]

@NgModule({
    declarations: [
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxSkeletonLoaderModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class ProductDetailsModule { }
