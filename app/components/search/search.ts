import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../../services/product-service";

@Component({
  selector: 'online-auction-search',
  templateUrl: 'app/components/search/search.html',
  providers: [ProductService]
})
export default class SearchComponent {

  categories: string[];

  formModel: FormGroup = new FormGroup({
    'title': new FormControl(),
    'price': new FormControl(),
    'category': new FormControl()
  });

  constructor ( private product_service: ProductService ) {
    this.categories = this.product_service.getAllCategories();

    const fb = new FormBuilder();

    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, this.positiveNumberValidator],
      'category': [-1]
    });
  }  

  positiveNumberValidator ( control: FormControl ): any {
    if ( !control.value ) {
      return null;
    }

    const price = parseInt( control.value );

    return price === null || typeof price === 'number' && price > 0 ? null : { positivenumber : true };
  }

  onSearch () {
    if ( this.formModel.valid ) {
      console.log( this.formModel.value );
    }
  }
}