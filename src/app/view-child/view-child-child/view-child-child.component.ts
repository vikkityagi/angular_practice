import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child-child.component.html',
  styleUrl: './view-child-child.component.css'
})
export class ViewChildChildComponent {

  title : string = "child data";

}
