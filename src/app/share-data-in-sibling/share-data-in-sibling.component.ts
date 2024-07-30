import { Component } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-share-data-in-sibling',
  standalone: true,
  imports: [RouterOutlet,Comp1Component,Comp2Component],
  templateUrl: './share-data-in-sibling.component.html',
  styleUrl: './share-data-in-sibling.component.css'
})
export class ShareDataInSiblingComponent {

}
