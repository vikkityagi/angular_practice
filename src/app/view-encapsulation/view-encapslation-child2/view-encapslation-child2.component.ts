import { Component } from '@angular/core';
import { ViewEncapslationChild1Component } from '../view-encapslation-child1/view-encapslation-child1.component';

@Component({
  selector: 'app-view-encapslation-child2',
  standalone: true,
  imports: [ViewEncapslationChild1Component],
  templateUrl: './view-encapslation-child2.component.html',
  styleUrl: './view-encapslation-child2.component.css'
})
export class ViewEncapslationChild2Component {

}
