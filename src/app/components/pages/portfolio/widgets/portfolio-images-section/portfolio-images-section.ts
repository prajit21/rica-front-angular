import { NgStyle } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';

import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';

import { portfolio, portfolioGallery } from '../../../../../shared/interface/pages';
import { PagesService } from '../../../../../shared/services/pages.service';

@Component({
  selector: 'app-portfolio-images-section',
  templateUrl: './portfolio-images-section.html',
  styleUrl: './portfolio-images-section.scss',
  imports: [GallerizeDirective, NgxMasonryModule, NgStyle],
})
export class PortfolioImagesSection {
  private pageService = inject(PagesService);
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  readonly gridType = input<string>();
  readonly details = input<boolean>(false);
  @Input() masonry: boolean = false;

  public portfolio: portfolio[];
  public images: portfolioGallery[] = [];
  public activeTab = 'all';

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
  };

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;

      this.images = [];
      this.portfolio.forEach(data => {
        if (this.masonry == true) {
          data.masonryGallery.forEach(items => {
            if (this.activeTab == 'all') {
              this.images.push(items);
            } else {
              if (items.type == this.activeTab) {
                this.images.push(items);
              }
            }
          });
        } else {
          data.gallery.forEach(items => {
            if (this.activeTab == 'all') {
              this.images.push(items);
            } else {
              if (items.type == this.activeTab) {
                this.images.push(items);
              }
            }
          });
        }
      });
    });
  }

  ngOnInit() {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  getTabData(value: string) {
    this.activeTab = value;

    this.images = [];
    this.portfolio.forEach(data => {
      if (this.masonry == true) {
        data.masonryGallery.forEach(items => {
          if (this.activeTab == 'all') {
            this.images.push(items);
          } else {
            if (items.type == this.activeTab) {
              this.images.push(items);
            }
          }
        });
      } else {
        data.gallery.forEach(items => {
          if (this.activeTab == 'all') {
            this.images.push(items);
          } else {
            if (items.type == this.activeTab) {
              this.images.push(items);
            }
          }
        });
      }
    });
  }
}
