import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Select, Store  } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { LoadMinistryData, RemoveMinistryData } from '../store/action/ministry.action';
import { Observable } from 'rxjs';
import { MinistryState } from '../store/states/ministry.state';


@Component({
  selector: 'app-ngxs',
  standalone: true,
  imports: [CommonModule], // Only import CommonModule here
  templateUrl: './ngxs.component.html',
  styleUrls: ['./ngxs.component.css']
})
export class NgxsComponent implements OnInit {

  public store = inject(Store);

  @Select(MinistryState.getMinistryData) ministryData$!: Observable<any>;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('Initializing component and dispatching LoadMinistryData action');
    this.store.dispatch(new LoadMinistryData()).subscribe({
      next: data => {
        console.log(data);
      }
    });

    this.ministryData$.subscribe(data => {
      console.log('Ministry Data from Store:', data);
    });
  }

  removeData(){
    this.store.dispatch(new RemoveMinistryData());
    // this.ministryData$ = {}
    this.cdRef.detectChanges();
  }
}