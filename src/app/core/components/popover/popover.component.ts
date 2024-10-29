import {
  Component,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  @Output() hide = new EventEmitter<void>();
  @ViewChild('popover', { static: false }) popover: ElementRef;

  constructor() {}

  @HostListener('document:click', ['$event'])
  hidePopover(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.popover.nativeElement.contains(target) ? null : this.hide.emit();
  }

  onPopoverClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
