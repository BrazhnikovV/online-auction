import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'online-auction-stars',
  templateUrl: 'app/components/stars/stars.html',  
  styles: [`.starrating { color: #d17581}`],
  styleUrls: ['app/components/stars/stars.css'],
})

export default class StarsComponent {
  private stars:     boolean[];
  private _rating:   number;  
  private max_stars: number = 5;

  @Input() readonly: boolean = true;
  @Input() get rating(): number {
    return this._rating;
  }

  set rating( value: number ) {
    this._rating = value || 0;
    this.stars = Array( this.max_stars ).fill( true, 0, this.rating );
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor( index: number) {
    if ( !this.readonly ) {
      this.rating = index + 1;
      this.ratingChange.emit( this.rating );
    }
  }
}
