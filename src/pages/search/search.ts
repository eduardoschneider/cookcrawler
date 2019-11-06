import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  public form = [
    { val: 'Queijo', isChecked: true },
    { val: 'Presunto', isChecked: false },
    { val: 'Farinha', isChecked: false },
    { val: 'Leite', isChecked: true },
    { val: 'Ovos', isChecked: false },
    { val: 'Frango', isChecked: false },
    { val: 'Tomate', isChecked: true },
    { val: 'Azeitona', isChecked: false }
  ];

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
