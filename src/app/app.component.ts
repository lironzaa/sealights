import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import * as fromApp from "./core/store/app.reducer";
import { getCountries } from "./features/users/store/users.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'sealights';

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(getCountries());
  }

}
