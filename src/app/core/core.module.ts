import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from './components/layout/header/header.component';
import { environment } from "../../environments/environment";
import { UsersEffects } from "../features/users/store/users.effects";
import * as fromApp from "./store/app.reducer";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ UsersEffects ]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ]
})
export class CoreModule {
}
