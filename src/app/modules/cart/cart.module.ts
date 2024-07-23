import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './cart.component';

export const route:Routes = [
    {
        path: '',
        component: CartComponent
    }
]

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class CartModule { }
