import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeChildComponent } from './async-pipe-child.component';

describe('AsyncPipeChildComponent', () => {
  let component: AsyncPipeChildComponent;
  let fixture: ComponentFixture<AsyncPipeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
