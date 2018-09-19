import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Product, ProductService } from '../../services/product-service';
import CarouselComponent from "../../components/carousel/carousel";
import ProductItemComponent from "../../components/product-item/product-item";
import { FilterPipe } from "../pipes/filter-pipe";


@Component({
  selector: 'online-auction-home-page',
  styleUrls: ['/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <online-auction-carousel></online-auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let product of products" class="col-sm-4 col-lg-4 col-md-4">
        <online-auction-product-item [product]="product"></online-auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
