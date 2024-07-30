import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataInSiblingComponent } from './share-data-in-sibling.component';

describe('ShareDataInSiblingComponent', () => {
  let component: ShareDataInSiblingComponent;
  let fixture: ComponentFixture<ShareDataInSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareDataInSiblingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareDataInSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
