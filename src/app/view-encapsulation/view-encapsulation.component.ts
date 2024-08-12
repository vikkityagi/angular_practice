import { Component, ViewEncapsulation } from '@angular/core';
import { ViewEncapslationChild1Component } from './view-encapslation-child1/view-encapslation-child1.component';
import { ViewEncapslationChild2Component } from './view-encapslation-child2/view-encapslation-child2.component';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [ViewEncapslationChild1Component,ViewEncapslationChild2Component],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapsulationComponent {

}
