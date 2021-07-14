import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSdComponent } from './review-sd.component';

describe('ReviewSdComponent', () => {
  let component: ReviewSdComponent;
  let fixture: ComponentFixture<ReviewSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
