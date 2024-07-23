import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { AppSearchComponent } from './app-search/app-search.component';
import { BrandsComponent } from './brands/brands.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';
import { CategoryListCarouselComponent } from './category-list-carousel/category-list-carousel.component';
import { FiltersComponent } from './filters/filters.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { InnerCartComponent } from './inner-cart/inner-cart.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MiniHeaderComponent } from './mini-header/mini-header.component';
import { OfferBannerComponent } from './offer-banner/offer-banner.component';
import { OfferItemComponent } from './offer-item/offer-item.component';
import { OverviewComponent } from './overview/overview.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ProductComponent } from './product/product.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { ReturnComponent } from './return/return.component';
import { ShipingBannerComponent } from './shiping-banner/shiping-banner.component';
import { UpperHeaderComponent } from './upper-header/upper-header.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FilterPipe } from '../filter.pipe';
import { QuickModalComponent } from './quick-modal/quick-modal.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { FormatTimePipe } from '../pipes/counter.pipe';

const components = [
    UpperHeaderComponent,
    AppSearchComponent,
    CategoryListCarouselComponent,
    CarouselComponent,
    ShipingBannerComponent,
    OfferItemComponent,
    ProductComponent,
    ProductsCarouselComponent,
    OfferBannerComponent,
    BrandsComponent,
    MegamenuComponent,
    InnerCartComponent,
    MiniHeaderComponent,
    SafeHtmlPipe,
    FormatTimePipe,
    CategoryCarouselComponent,
    OverviewComponent,
    FiltersComponent,
    PageHeaderComponent,
    ReturnComponent,
    ImageLoaderComponent,
    FilterPipe,
    QuickModalComponent,
    LoaderComponent,
    ProductGalleryComponent,
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        RouterModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgxSkeletonLoaderModule
    ],
    providers: [

    ]
})
export class SharedModule { }
