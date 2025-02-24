import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() items: any;
  @Input() template: any;
  @Input() type: string = 'default';
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  @Output() onChangeItem = new EventEmitter<any>();

  activeItem: number = 0;
  totalWidth = 0;
  constructor() {}

  ngAfterViewInit() {
    if (this.type === 'banner') {
      this.totalWidth = this.carouselContainer.nativeElement.scrollWidth;
      this.carouselContainer.nativeElement.children[
        this.activeItem
      ].style.opacity = 1;
    }
  }

  scrollCarousel(direction: string) {
    if (this.type === 'banner') {
      this.carouselContainer.nativeElement.children[
        this.activeItem
      ].style.opacity = 0;
      if (direction === 'left' && this.activeItem > 0) {
        this.activeItem -= 1;
      } else if (direction === 'right') {
        if (this.activeItem < this.items.length - 1) {
          this.activeItem += 1;
        } else {
          this.activeItem = 0;
        }
      }
      this.carouselContainer.nativeElement.scrollLeft =
        (this.totalWidth / this.items?.length) * this.activeItem;
      this.carouselContainer.nativeElement.children[
        this.activeItem
      ].style.opacity = 1;
    } else {
      if (direction === 'left' && this.activeItem !== 0) {
        this.activeItem -= 1;
      } else if (
        direction === 'right' &&
        this.activeItem !== this.items.length - 1
      ) {
        this.activeItem += 1;
      }
      this.onChangeItem.emit(this.activeItem);
      // this.carouselContainer.nativeElement.scrollLeft +=
      //   direction === 'left' ? -200 : 200;
    }
  }
}
