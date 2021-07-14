import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAcComponent } from './review-ac.component';

describe('ReviewAcComponent', () => {
  let component: ReviewAcComponent;
  let fixture: ComponentFixture<ReviewAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
