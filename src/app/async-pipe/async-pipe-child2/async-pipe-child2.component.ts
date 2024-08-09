import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AsyncPipeChildComponent } from '../async-pipe-child/async-pipe-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe-child2',
  standalone: true,
  imports: [AsyncPipeChildComponent,CommonModule],
  templateUrl: './async-pipe-child2.component.html',
  styleUrl: './async-pipe-child2.component.css'
})
export class AsyncPipeChild2Component implements AfterViewInit {

  @ViewChild(AsyncPipeChildComponent) asyncPipeChildComponent!: AsyncPipeChildComponent;

  ngAfterViewInit(): void {
      this.asyncPipeChildComponent.mysubject.subscribe({
        next: data=>{
          console.log('async pipe child2 '+data);
        }
      })
  }



}
