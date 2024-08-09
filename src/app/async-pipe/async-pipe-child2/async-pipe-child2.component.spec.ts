import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeChild2Component } from './async-pipe-child2.component';

describe('AsyncPipeChild2Component', () => {
  let component: AsyncPipeChild2Component;
  let fixture: ComponentFixture<AsyncPipeChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipeChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
