import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapslationChild1Component } from './view-encapslation-child1.component';

describe('ViewEncapslationChild1Component', () => {
  let component: ViewEncapslationChild1Component;
  let fixture: ComponentFixture<ViewEncapslationChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapslationChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapslationChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
