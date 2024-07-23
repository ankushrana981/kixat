import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellersProductsComponent } from './sellers-products.component';

export const route:Routes = [
    {
        path: '',
        component: SellersProductsComponent
    }
]

@NgModule({
    declarations: [
        SellersProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class SellerProductsModule { }
