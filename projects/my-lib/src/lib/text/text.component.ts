import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean);

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input()
  text: string = 'Title...';

  @Input()
  type: 'title' | 'subtitle' | 'normal' = 'normal';

  public get classes(): string[] {
    return getStyles(this.text, this.type)
  }
}
