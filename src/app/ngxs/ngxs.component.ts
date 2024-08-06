import { Component, inject, OnInit } from '@angular/core';
import { Store  } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { LoadMinistryData } from '../store/action/ministry.action';


@Component({
  selector: 'app-ngxs',
  standalone: true,
  imports: [CommonModule], // Only import CommonModule here
  templateUrl: './ngxs.component.html',
  styleUrls: ['./ngxs.component.css']
})
export class NgxsComponent implements OnInit {

  public store = inject(Store);

  constructor() {}

  ngOnInit() {
    console.log('Initializing component and dispatching LoadMinistryData action');
    this.store.dispatch(new LoadMinistryData());

    
  }
}