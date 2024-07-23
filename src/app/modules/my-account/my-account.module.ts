import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AfterSalesComponent } from './after-sales/after-sales.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { MyAccountComponent } from './my-account.component';
import { MyAddresssesEmptyComponent } from './my-addressses-empty/my-addressses-empty.component';
import { MyAddresssesComponent } from './my-addressses/my-addressses.component';
import { OrderDetailsErrorComponent } from './order-details-error/order-details-error.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';

export const route: Routes = [
    {
        path: '',
        component: MyAccountComponent,
        children: [
            {
                path: '',
                component: AccountDetailComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'orders/details',
                component: OrderDetailsComponent
            },
            {
                path: 'addresses',
                component: MyAddresssesComponent
            },
            {
                path: 'no-address',
                component: MyAddresssesEmptyComponent
            },
            {
                path: 'return',
                component: AfterSalesComponent
            },
            {
                path: 'orders/details-error',
                component: OrderDetailsErrorComponent
            },
            {
                path: 'cancel',
                component: CancelOrderComponent
            },
        ]
    }
]

@NgModule({
    declarations: [
        AccountDetailComponent,
        MyAccountComponent,
        OrdersComponent,
        OrderDetailsComponent,
        MyAddresssesComponent,
        MyAddresssesEmptyComponent,
        AfterSalesComponent,
        OrderDetailsErrorComponent,
        CancelOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(route)
    ],
    providers: [ ]
})
export class MyAccountModule { }
