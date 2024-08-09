import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AsyncPipeChildComponent } from './async-pipe-child/async-pipe-child.component';
import { AsyncPipeChild2Component } from './async-pipe-child2/async-pipe-child2.component';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [AsyncPipeChild2Component],
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent   {

  title: string = "parent data";


  @ViewChild(AsyncPipeChildComponent) asyncpipecomponent!: AsyncPipeChildComponent;

  fetch(): void {
    // console.log(this.asyncpipecomponent.title)
      this.asyncpipecomponent.mysubject.subscribe({
        next: data=>{
          console.log("AsyncPipeComponent"+ data)
        }
      })
  }
 
}
