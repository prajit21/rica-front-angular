import { Component, input } from '@angular/core';
import { VideoOne } from './video-one/video-one';

@Component({
    selector: 'app-video',
    templateUrl: './video.html',
    styleUrls: ['./video.scss'],
    imports: [VideoOne]
})
export class Video {

  readonly type = input<string>();

}
