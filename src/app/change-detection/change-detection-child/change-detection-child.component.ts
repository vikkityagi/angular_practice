import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection-child.component.html',
  styleUrl: './change-detection-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements DoCheck{

  @Input() data: any;

  constructor(private cdRef: ChangeDetectorRef){}

  ngDoCheck(): void {
    // this.cdRef.detectChanges();
    console.log("parent data change");
  }


}
