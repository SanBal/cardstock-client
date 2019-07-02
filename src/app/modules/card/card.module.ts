import {NgModule} from '@angular/core';
import {AddCardComponent} from './add-card/add-card.component';
import {CardRoutingModule} from "./card-routing.module";
import {CardComponent} from './card.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [AddCardComponent, CardComponent],
  imports: [
    CardRoutingModule,
    SharedModule
  ]
})
export class CardModule {}
