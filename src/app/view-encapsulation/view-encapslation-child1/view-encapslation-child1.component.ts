import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapslation-child1',
  standalone: true,
  imports: [],
  templateUrl: './view-encapslation-child1.component.html',
  styleUrl: './view-encapslation-child1.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapslationChild1Component {

}
