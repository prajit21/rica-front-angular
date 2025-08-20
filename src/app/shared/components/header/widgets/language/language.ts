import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-language',
    templateUrl: './language.html',
    styleUrls: ['./language.scss'],
    imports: [FormsModule]
})
export class Language {

  private translate = inject(TranslateService);

  public languages = [
    {
      name: 'ENG',
      code: 'en',
    },
    {
      name: 'FRE',
      code: 'fr',
    },
    {
      name: 'SPA',
      code: 'sp',
    },
    {
      name: 'DUT',
      code: 'du',
    },
  ];

  getLanguage(event: Event){
    this.translate.use((event.target as HTMLInputElement).value)
  }
}
