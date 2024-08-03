import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
}
