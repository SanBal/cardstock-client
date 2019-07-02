import {NgModule} from '@angular/core';
import {CardRoutingModule} from "./card-routing.module";
import {CardComponent} from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CardRoutingModule
  ]
})
export class CardModule {}
