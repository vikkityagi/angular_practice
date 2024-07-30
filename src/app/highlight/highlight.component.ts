import { Component } from '@angular/core';
import { AppHighlightDirective } from '../app-highlight.directive';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [AppHighlightDirective],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.css'
})
export class HighlightComponent {

}
