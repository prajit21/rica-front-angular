import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SinglePageRoutingModule } from './single-page-routing.module';

import { RestaurantPageClassic } from './restaurant-page-classic/restaurant-page-classic';
import { RestaurantPageImageSlider } from './restaurant-page-image-slider/restaurant-page-image-slider';
import { RestaurantPageLeftCart } from './restaurant-page-left-cart/restaurant-page-left-cart';
import { RestaurantPageTabs } from './widgets/restaurant-page-tabs/restaurant-page-tabs';
import { RestaurantOrders } from './widgets/restaurant-orders/restaurant-orders';
import { RestaurantOverview } from './widgets/restaurant-overview/restaurant-overview';
import { RestaurantGallery } from './widgets/restaurant-gallery/restaurant-gallery';
import { RestaurantLocation } from './widgets/restaurant-location/restaurant-location';
import { RestaurantBookTable } from './widgets/restaurant-book-table/restaurant-book-table';
import { RestaurantReview } from './widgets/restaurant-review/restaurant-review';
import { RestaurantMenu } from './widgets/restaurant-orders/restaurant-menu/restaurant-menu';
import { RestaurantMenuItems } from './widgets/restaurant-orders/restaurant-menu-items/restaurant-menu-items';
import { RestaurantDetailSlider } from './widgets/restaurant-detail-slider/restaurant-detail-slider';
import { RestaurantCartItems } from './widgets/restaurant-cart-items/restaurant-cart-items';


@NgModule({
    imports: [
        CommonModule,
        SinglePageRoutingModule,
        SharedModule,
        RestaurantPageClassic,
        RestaurantPageImageSlider,
        RestaurantPageLeftCart,
        RestaurantPageTabs,
        RestaurantOrders,
        RestaurantOverview,
        RestaurantGallery,
        RestaurantLocation,
        RestaurantBookTable,
        RestaurantReview,
        RestaurantMenu,
        RestaurantMenuItems,
        RestaurantDetailSlider,
        RestaurantCartItemsComponent
    ],
    exports: [
        RestaurantCartItemsComponent
    ]
})
export class SinglePageModule { }
