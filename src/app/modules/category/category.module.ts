import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCarouselComponent } from 'src/app/shared/category-carousel/category-carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category.component';

export const route:Routes = [
    {
        path: '',
        component: CategoryComponent
    }
]

@NgModule({
    declarations: [
        CategoryComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class CategoryModule { }
