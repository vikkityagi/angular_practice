import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-child-to-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './child-to-parent.component.html',
  styleUrl: './child-to-parent.component.css'
})
export class ChildToParentComponent {

  show: any;

  handleSubtract(event: any){

    this.show = event;

  }

}
