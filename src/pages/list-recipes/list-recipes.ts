import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-recipes',
  templateUrl: 'list-recipes.html'
})
export class ListRecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
