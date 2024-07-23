import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerProfileComponent } from './seller-profile.component';

export const route:Routes = [
    {
        path: '',
        component: SellerProfileComponent
    }
]

@NgModule({
    declarations: [
        SellerProfileComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [

    ]
})
export class SellerProfileModule { }
