import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapslationChild2Component } from './view-encapslation-child2.component';

describe('ViewEncapslationChild2Component', () => {
  let component: ViewEncapslationChild2Component;
  let fixture: ComponentFixture<ViewEncapslationChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapslationChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapslationChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
