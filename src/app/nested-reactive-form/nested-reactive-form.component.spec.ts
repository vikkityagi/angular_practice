import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedReactiveFormComponent } from './nested-reactive-form.component';

describe('NestedReactiveFormComponent', () => {
  let component: NestedReactiveFormComponent;
  let fixture: ComponentFixture<NestedReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
