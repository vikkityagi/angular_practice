import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { AsyncPipeComponent } from '../async-pipe.component';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe-child.component.html',
  styleUrl: './async-pipe-child.component.css'
})
export class AsyncPipeChildComponent     {

  

  title: string = "child data";

  myobservable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.complete();
  });

  mysubject = new Subject<number>();

  
  setData() {
    this.mysubject.next(1);
    this.mysubject.next(2);
    this.mysubject.next(3);
  }

  inform() {
    console.log("Call inform method");

    this.mysubject.subscribe({
      next: data => {
        console.log('Subscriber 2 received:', data);
      }
    });

    // Call setData to emit some values
    // this.setData();
  }

  

}
