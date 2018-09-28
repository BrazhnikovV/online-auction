import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { FormsModule } from "@angular/forms";
import { Product, Review, ProductService } from "../../services/product-service";

@Component({
    selector : "online-auction-product-page",
    templateUrl : "app/components/product-detail/product-detail.html",
    styleUrls : ['app/components/product-detail/product-detail.css']
})
export default class ProductDetailComponent {

    product: Product;
    reviews: Review[];

    new_comment: string;
    new_rating: number;

    is_review_hidden: boolean = true;

    constructor ( route: ActivatedRoute, productService: ProductService ) {
        let prodId: number = parseInt( route.snapshot.params['productId'] );
        this.product = productService.getProductById( prodId );
        this.reviews = productService.getReviewsForProduct( this.product.id );
    }

    addReview () {
        let review = new Review( 
            0, this.product.id, new Date(), 'Anonymous', this.new_rating, this.new_comment 
        );

        console.log( "Adding review " + JSON.stringify( review ) );

        this.reviews = [...this.reviews, review];
        this.product.rating = this.averageRating( this.reviews );

        this.resetForm();
    }

    averageRating ( reviews: Review[] ) {
        let sum = reviews.reduce(( average, review ) => average + review.rating, 0 );

        return sum / reviews.length;
    }

    resetForm () {
        this.new_rating = 0;
        this.new_comment = null;
        this.is_review_hidden = true;
    }
}