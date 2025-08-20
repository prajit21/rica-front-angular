import { Component, input } from '@angular/core';
import { CopyRight } from './widgets/copy-right/copy-right';
import { SocialMedia } from './widgets/social-media/social-media';
import { NewTopic } from './widgets/new-topic/new-topic';
import { UsefulLinks } from './widgets/useful-links/useful-links';
import { TopPlaces } from './widgets/top-places/top-places';
import { Location } from './widgets/location/location';
import { About } from './widgets/about/about';
import { Contact } from './widgets/contact/contact';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.scss'],
    imports: [NgClass, NgStyle, Contact, About, Location, TopPlaces, UsefulLinks, NewTopic, SocialMedia, CopyRight]
})
export class Footer {

  readonly type = input<string>();
  readonly location = input<boolean>();
  readonly places = input<boolean>();
  readonly sticky = input<boolean>();
  readonly bgImage = input<boolean>(false);
  readonly subFooter = input<boolean>(true);
  readonly footerClass = input<boolean>(false);
  
}
