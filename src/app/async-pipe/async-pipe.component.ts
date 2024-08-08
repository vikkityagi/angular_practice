import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

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

  ngOnInit(): void {
    // Subscribe to mysubject here to ensure you receive emitted values
    // this.mysubject.subscribe({
    //   next: data => {
    //     console.log('Subscriber 1 received:', data);
    //   }
    // });
  }

  setData() {
    this.mysubject.next(1);
    this.mysubject.next(2);
    this.mysubject.next(3);
  }

  inform() {
    console.log("Call inform method");

    // Subscribe again to show how multiple subscribers can receive the data
    this.mysubject.subscribe({
      next: data => {
        console.log('Subscriber 2 received:', data);
      }
    });

    // Call setData to emit some values
    this.setData();
  }
}
