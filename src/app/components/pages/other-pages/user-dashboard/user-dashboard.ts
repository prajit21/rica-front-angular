import { Component, HostListener, inject } from '@angular/core';

import { UserDashboardBooking } from './user-dashboard-booking/user-dashboard-booking';
import { UserDashboardBookmark } from './user-dashboard-bookmark/user-dashboard-bookmark';
import { UserDashboardCards } from './user-dashboard-cards/user-dashboard-cards';
import { UserDashboardDetails } from './user-dashboard-details/user-dashboard-details';
import { UserDashboardProfile } from './user-dashboard-profile/user-dashboard-profile';
import { UserDashboardSecurity } from './user-dashboard-security/user-dashboard-security';
import { UserDashboardTab } from './user-dashboard-tab/user-dashboard-tab';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { userDashboard } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss',
  imports: [
    Header,
    Breadcrumbs,
    UserDashboardTab,
    UserDashboardDetails,
    UserDashboardProfile,
    UserDashboardBooking,
    UserDashboardCards,
    UserDashboardBookmark,
    UserDashboardSecurity,
    Footer,
    Layout,
  ],
})
export class UserDashboard {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'dashboard';
  public parent = 'Home';
  public child = 'dashboard';

  public userDashboardDetails: userDashboard;
  public activeTab: string = 'dashboard';

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;

    if (number > 595) {
      this.isStuck = true;
      this.isNotStuck = false;
    } else {
      this.isStuck = false;
    }
    if (number > 805) {
      this.isNotStuck = true;
      this.isStuck = false;
    }
  }

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.userDashboardDetails = response.otherPages.userDashboard;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
