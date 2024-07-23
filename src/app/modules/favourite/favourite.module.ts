import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouriteComponent } from './favourite.component';

export const route:Routes = [
    {
        path: '',
        component: FavouriteComponent
    }
]

@NgModule({
    declarations: [
        FavouriteComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class FavouriteModule { }
