import { Component } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  links = [
    {
      name: "Users List",
      path: "users/list",
    },
    {
      name: "Add User",
      path: "users/add-user",
    },
  ];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
