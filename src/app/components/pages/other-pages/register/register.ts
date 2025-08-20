import { Component } from '@angular/core';

import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { CommanLoginForm } from '../widgets/comman-login-form/comman-login-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.scss',
  imports: [Header, Breadcrumbs, Animation, CommanLoginForm, Footer, Layout],
})
export class Register {
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'sign up';
  public parent = 'Home';
  public child = 'sign up';

  constructor() {}
}
