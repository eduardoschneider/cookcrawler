import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRecipesPage } from './list-recipes';

@NgModule({
  declarations: [
    ListRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListRecipesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListRecipesPage
  ]
})
export class ListRecipesPageModule { }
