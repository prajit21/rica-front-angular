import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AnimatedImages } from '../../../../../shared/components/comman/animated-images/animated-images';
import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { Title } from '../../../../../shared/components/comman/title/title';
import { animatedImage } from '../../../../../shared/interface/cab-modern';

@Component({
  selector: 'app-cab-modern-call',
  templateUrl: './cab-modern-call.html',
  styleUrls: ['./cab-modern-call.scss'],
  imports: [NgClass, Animation, Title, AnimatedImages, RouterLink],
})
export class CabModernCall {
  readonly images = input<animatedImage[]>();
  readonly animation = input<boolean>(true);
  readonly titleType = input<string>('simple');
  readonly sectionClass = input<boolean>(true);
}
