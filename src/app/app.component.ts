import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ButtonComponent, MyLibComponent, TextComponent } from '../../projects/my-lib/src/public-api';
import { ButtonComponent, MyLibComponent, TextComponent } from '../../dist/my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MyLibComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StoryBookProva';
}
