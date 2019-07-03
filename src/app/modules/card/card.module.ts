import {NgModule} from '@angular/core';
import {AddCardComponent} from './add-card/add-card.component';
import {CardRoutingModule} from "./card-routing.module";
import {CardComponent} from './card.component';
import {SharedModule} from "../../shared/shared.module";
import {MonsterCardInfosComponent} from './add-card/monster-card-infos/monster-card-infos.component';

@NgModule({
  declarations: [
    CardComponent,
    AddCardComponent,
    MonsterCardInfosComponent
  ],
  imports: [
    CardRoutingModule,
    SharedModule
  ]
})
export class CardModule {
}
