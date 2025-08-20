import { Component, inject } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';
import { portfolio, portfolioGallery } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { NgClass } from '@angular/common';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-portfolio-creative3',
    templateUrl: './portfolio-creative3.html',
    styleUrl: './portfolio-creative3.scss',
    imports: [Header, Breadcrumbs, GallerizeDirective, NgxMasonryModule, NgClass, Footer, Layout]
})
export class PortfolioCreative3 {

  private pageService = inject(PagesService); 
  public gallery = inject(Gallery); 
  public lightbox = inject(Lightbox); 

  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  public portfolio: portfolio[];
  public images: portfolioGallery[] = [];
  public activeTab = 'all';

  public masonryOptions: NgxMasonryOptions = {
		resize: true,
		initLayout: true,
  };

  constructor(){
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;

      this.images = [];
      this.portfolio.forEach((data) => {
        data.creativeSectionMasonry.forEach((items) => {
          if(this.activeTab == 'all'){
            this.images.push(items);
          }else {
            if(items.type == this.activeTab){
              this.images.push(items);
            }
          }
        })
      })
    })
  }


  ngOnInit(){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  getTabData(value: string){
    this.activeTab = value;

    this.images = [];
    this.portfolio.forEach((data) => {
      data.creativeSectionMasonry.forEach((items) => {
        if(this.activeTab == 'all'){
          this.images.push(items);
        }else {
          if(items.type == this.activeTab){
            this.images.push(items);
          }
        }
      })
    })
  }
}
