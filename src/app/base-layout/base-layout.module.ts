import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from '../shared/shared.module';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BaseLayoutComponent } from './base-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../modules/homepage/home.module').then(m => m.HomeModule),
            },
            {
                path: 'cart',
                loadChildren: () => import('../modules/cart/cart.module').then(m => m.CartModule)
            },
            {
                path: 'favourite',
                loadChildren: () => import('../modules/favourite/favourite.module').then(m => m.FavouriteModule)
            },
            {
                path: 'product/:id',
                loadChildren: () => import('../modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
            },
            {
                path: 'sub-category/:id',
                loadChildren: () => import('../modules/sub-category/sub-category.module').then(m => m.SubCategoryModule)
            },
            {
                path: 'compare',
                loadChildren: () => import('../modules/compare/compare.module').then(m => m.CompareModule)
            },
            {
                path: 'static-page',
                loadChildren: () => import('../modules/static-page/static-page.module').then(m => m.StaticPageModule)
            },
            {
                path: 'brands',
                loadChildren: () => import('../modules/brands/brands.module').then(m => m.BrandsModule)
            },
            {
                path: 'sellers-products',
                loadChildren: () => import('../modules/sellers-products/sellers-products.module').then(m => m.SellerProductsModule)
            },
            {
                path: 'seller-profile',
                loadChildren: () => import('../modules/seller-profile/seller-profile.module').then(m => m.SellerProfileModule)
            },
            {
                path: 'contact-us',
                loadChildren: () => import('../modules/contactus/contactus.module').then(m => m.ContactUsModule)
            },
            {
                path: 'category/:id',
                loadChildren: () => import('../modules/category/category.module').then(m => m.CategoryModule)
            },
        ]
    }
]

const components = [
    BaseLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterModule.forChild(routes),
        NgxSkeletonLoaderModule
    ],
    providers: [

    ]
})
export class BaseLayoutModule { }
