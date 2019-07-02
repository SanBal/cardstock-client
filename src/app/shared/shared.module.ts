import {NgModule} from '@angular/core';
import {NgBootstrapModule} from "./ng-bootstrap.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [],
  exports: [NgBootstrapModule, CommonModule]
})
export class SharedModule {
}
