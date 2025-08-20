import { Component, input } from '@angular/core';

@Component({
    selector: 'app-comman-login-form',
    templateUrl: './comman-login-form.html',
    styleUrl: './comman-login-form.scss',
    
})
export class CommanLoginForm {

  readonly type = input<string>();

}
