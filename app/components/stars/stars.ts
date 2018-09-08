import { Component, Input, OnInit } from "@angular/core";

@Component({
    templateUrl : "app/components/stars/stars.html",
    styles : [ `.starrating { color: #d17581; }` ],
    selector : "online-auction-stars",
    styleUrls : [ "app/components/stars/open-iconic-bootstrap.min.css" ],
})
export default class StarsComponent implements OnInit {
    @Input() count: number = 5;
    @Input() rating: number = 0;
    stars : boolean[] = [];

    ngOnInit () {
        for ( let i = 0; i <= this.count; i++ ) {
            this.stars.push( i > this.rating );
        }
    }
}