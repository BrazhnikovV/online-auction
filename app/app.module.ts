import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import ApplicationComponent from "./components/application/application";
import HomeComponent from "./components/home/home";
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import { ProductService } from "./services/product-service";
import ProductItemComponent from "./components/product-item/product-item";
import ProductDetailComponent from "./components/product-detail/product-detail";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";


@NgModule({
    imports : [ BrowserModule, RouterModule.forRoot([
        { path : '', component : HomeComponent },
        { path : 'products/:prodTitle', component : ProductDetailComponent }
    ])],
    declarations : [ 
        ApplicationComponent,
        HomeComponent,
        ProductDetailComponent,
        ProductItemComponent,
        StarsComponent,
        CarouselComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent
    ],
    providers : [ ProductService, { provide : LocationStrategy, useClass : HashLocationStrategy } ],
    bootstrap : [ ApplicationComponent ]
})
export class AppModule {}