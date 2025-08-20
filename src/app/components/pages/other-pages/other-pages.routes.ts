import { Routes } from '@angular/router';

import { AboutUs1 } from './about-us-1/about-us-1';
import { AboutUs2 } from './about-us-2/about-us-2';
import { ComingSoon1 } from './coming-soon-1/coming-soon-1';
import { ComingSoon2 } from './coming-soon-2/coming-soon-2';
import { ComingSoon3 } from './coming-soon-3/coming-soon-3';
import { ContactUs1 } from './contact-us-1/contact-us-1';
import { ContactUs2 } from './contact-us-2/contact-us-2';
import { ContactUs3 } from './contact-us-3/contact-us-3';
import { ErrorPage404 } from './error-page-404/error-page-404';
import { Faq } from './faq/faq';
import { LogIn } from './log-in/log-in';
import { Register } from './register/register';
import { UserDashboard } from './user-dashboard/user-dashboard';

export default [
  {
    path: 'about-us-1',
    component: AboutUs1,
  },
  {
    path: 'about-us-2',
    component: AboutUs2,
  },
  {
    path: 'contact-us-1',
    component: ContactUs1,
  },
  {
    path: 'contact-us-2',
    component: ContactUs2,
  },
  {
    path: 'contact-us-3',
    component: ContactUs3,
  },
  {
    path: 'coming-soon-1',
    component: ComingSoon1,
  },
  {
    path: 'coming-soon-2',
    component: ComingSoon2,
  },
  {
    path: 'coming-soon-3',
    component: ComingSoon3,
  },
  {
    path: '404',
    component: ErrorPage404,
  },
  {
    path: 'faq',
    component: Faq,
  },
  {
    path: 'log-in',
    component: LogIn,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'user-dashboard',
    component: UserDashboard,
  },
] as Routes;
