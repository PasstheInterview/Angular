import { Component } from '@angular/core';

import { MyStandaloneComponentComponent } from '../my-standalone-component/my-standalone-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [MyStandaloneComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css',
})
export class ParentComponentComponent {}
