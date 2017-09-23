import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public invoice = {
    items: [{
      qty: 1,
      description: 'item',
      cost: 2.0
    }]
  };

  addItem() {
    this.invoice.items.push({
      qty: 1,
      description: '',
      cost: 1
    });
  };

  removeItem(index) {
    console.log(index);
    this.invoice.items.splice(index, 1);
  }

  totalSum() {
    let total = 0;
    this.invoice.items.forEach(function (item) {
      total += item.qty * item.cost;
    });
    return total;
  };

  ngOnInit() {
  }


  constructor() {
  }
}
