import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { AppComponent } from "./app.component";

import ApplicationComponent from "./components/application/application";
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import { ProductService } from "./services/product-service";
import ProductItemComponent from "./components/product-item/product-item";


@NgModule({
    imports : [ BrowserModule ],
    declarations : [ 
        ApplicationComponent,
        ProductItemComponent,
        StarsComponent,
        CarouselComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent
    ],
    providers : [ ProductService ],
    bootstrap : [ ApplicationComponent ]
})
export class AppModule {}