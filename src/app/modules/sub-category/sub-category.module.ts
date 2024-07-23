import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryComponent } from './sub-category.component';

export const route:Routes = [
    {
        path: '',
        component: SubCategoryComponent
    }
]

@NgModule({
    declarations: [
        SubCategoryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route),
        NgxSkeletonLoaderModule
    ],
    providers: [

    ]
})
export class SubCategoryModule { }
