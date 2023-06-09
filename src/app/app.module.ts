import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
