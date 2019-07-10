import {NgModule} from '@angular/core';
import {AddCardComponent} from './add-card/add-card.component';
import {CardRoutingModule} from "./card-routing.module";
import {CardComponent} from './card.component';
import {SharedModule} from "../../shared/shared.module";
import {MonsterCardInfosComponent} from './add-card/monster-card-infos/monster-card-infos.component';
import {CardsTableComponent} from './overview/cards-table/cards-table.component';

@NgModule({
  declarations: [
    CardComponent,
    AddCardComponent,
    MonsterCardInfosComponent,
    CardsTableComponent
  ],
  imports: [
    CardRoutingModule,
    SharedModule
  ]
})
export class CardModule {
}
