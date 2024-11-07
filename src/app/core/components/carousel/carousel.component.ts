import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() items: any;
  @Input() template: any;
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  activeItem: number = 0;
  totalWidth = 0;
  constructor() {}

  ngAfterViewInit() {
    this.totalWidth = this.carouselContainer.nativeElement.scrollWidth;
    this.carouselContainer.nativeElement.children[
      this.activeItem
    ].style.opacity = 1;
  }

  scrollCarousel(direction: string) {
    this.carouselContainer.nativeElement.children[
      this.activeItem
    ].style.opacity = 0;
    if (direction === 'left' && this.activeItem > 0) {
      this.activeItem -= 1;
    } else if (
      direction === 'right' &&
      this.activeItem < this.items.length - 1
    ) {
      this.activeItem += 1;
    }
    this.carouselContainer.nativeElement.scrollLeft =
      this.totalWidth * this.activeItem;
    this.carouselContainer.nativeElement.children[
      this.activeItem
    ].style.opacity = 1;
  }
}
