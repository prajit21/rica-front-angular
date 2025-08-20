import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { CommanLoginForm } from '../widgets/comman-login-form/comman-login-form';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.html',
    styleUrl: './log-in.scss',
    imports: [Header, Breadcrumbs, Animation, CommanLoginForm, Footer, Layout]
})
export class LogIn {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'log in';
  public parent = 'Home';
  public child = 'log in';

  constructor(){}

}
