import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Benvenuti nel nostro {{title}}!
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h6 class="text-center"><a [routerLink]="['/cart']">Cart: {{(cart | async).length}}</a></h6>
          <hr />
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'online-store';
  cart: Observable<Array<any>>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.cart = this.store.select('cart');
  }
}
