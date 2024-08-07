import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { ChangeDetectionChildComponent } from './change-detection-child/change-detection-child.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ChangeDetectionChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent{

  creatureList: any[] = ['Fish','Turtle'];

  addNewCreature(value: any){
    this.creatureList.push(value);
  }

  

}
