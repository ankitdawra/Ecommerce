import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: string;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter();

  constructor() {}

  handleClick() {
    this.onClick.emit();
  }
}
