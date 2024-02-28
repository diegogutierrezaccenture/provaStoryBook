import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  label: string = '';

  @Input()
  type: "primary" | "secondary" | "tertiary" = "primary"

  @Input()
  size: "small" | "normal" | "large" = "normal"

  public get classes(): string[] {
    return getStyles(this.type, this.size)
  }
}