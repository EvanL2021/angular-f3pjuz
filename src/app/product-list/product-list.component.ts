import { Component } from '@angular/core';
import { Product } from '../products';
import { Fournisseur, fournisseurs } from '../fournisseur';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products : Product[]=[];
  fournisseurs : Fournisseur[] = fournisseurs;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe( data => this.products = data );
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  changeFrn( id: number ) {
    this.productService.setFrn( id );
    this.productService.getProducts().subscribe( data => this.products = data );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
