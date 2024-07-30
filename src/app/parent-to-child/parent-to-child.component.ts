import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-to-child',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.css'
})
export class ParentToChildComponent  {

  count: any;
  change(value: any){
    this.count = value ;
  }

  



}
