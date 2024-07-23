import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompareComponent } from './compare.component';

export const route:Routes = [
    {
        path: '',
        component: CompareComponent
    }
]

@NgModule({
    declarations: [
        CompareComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class CompareModule { }
