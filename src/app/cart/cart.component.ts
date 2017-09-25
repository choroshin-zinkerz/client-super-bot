import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public invoice = {
    items: [{
      qty: 1,
      description: 'item 1',
      cost: 2
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
