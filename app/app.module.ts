import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
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
import { FilterPipe } from "./components/pipes/filter-pipe";


@NgModule({
    imports : [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
        { path : '', component : HomeComponent },
        { path : 'products/:productId', component : ProductDetailComponent }
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
        FooterComponent,
        FilterPipe
    ],
    providers : [ ProductService, { provide : LocationStrategy, useClass : HashLocationStrategy } ],
    bootstrap : [ ApplicationComponent ]
})
export class AppModule {}