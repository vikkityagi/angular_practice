import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayLogicComponent } from './array-logic.component';

describe('ArrayLogicComponent', () => {
  let component: ArrayLogicComponent;
  let fixture: ComponentFixture<ArrayLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
