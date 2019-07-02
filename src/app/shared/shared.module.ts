import {NgModule} from '@angular/core';
import {NgBootstrapModule} from "./ng-bootstrap.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  exports: [
    NgBootstrapModule,
    CommonModule,
    ReactiveFormsModule]
})
export class SharedModule {
}
