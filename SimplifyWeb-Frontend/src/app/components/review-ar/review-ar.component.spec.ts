import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewArComponent } from './review-ar.component';

describe('ReviewArComponent', () => {
  let component: ReviewArComponent;
  let fixture: ComponentFixture<ReviewArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
