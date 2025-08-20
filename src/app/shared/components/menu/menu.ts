import { NgClass, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { IMenu, NavService } from '../../services/nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  imports: [NgClass, NgTemplateOutlet, RouterLink, TitleCasePipe, TranslateModule],
})
export class Menu {
  public navServices = inject(NavService);

  public menuItems: IMenu[] = [];
  public isOpen: boolean = false;

  constructor() {
    const navServices = this.navServices;
    this.menuItems = navServices.MENUITEMS;
  }

  openSidebar() {
    this.isOpen = true;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  toggleMenu(item: IMenu) {
    if (!item.active) {
      this.menuItems.forEach(menu => {
        if (this.menuItems.includes(item)) {
          menu.active = false;
        }
        if (!menu.children) {
          return false;
        }
        if (menu.children) {
          menu.children.forEach(child => {
            if (menu.children?.includes(item)) {
              child.active = false;
            }
            if (child.section) {
              child.section.forEach(sectionChild => {
                if (child.section?.includes(item)) {
                  sectionChild.active = false;
                }
              });
            }
            if (child.children) {
              child.children.forEach(subChild => {
                if (child.children?.includes(item)) {
                  subChild.active = false;
                }
              });
            }
          });
        }
        return;
      });
    }
    item.active = !item.active;
  }
}
