import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrandsPageComponent } from './brands.component';

export const route:Routes = [
    {
        path: '',
        component: BrandsPageComponent
    }
]

@NgModule({
    declarations: [
        BrandsPageComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class BrandsModule { }
