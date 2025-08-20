import { Component, input } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { TestimonialTwo } from './testimonial-two/testimonial-two';
import { TestimonialOne } from './testimonial-one/testimonial-one';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.html',
    styleUrls: ['./testimonial.scss'],
    imports: [TestimonialOne, TestimonialTwo]
})
export class Testimonial {

  readonly type = input<string>();
  readonly testimonial = input<testimonial[]>();

}
