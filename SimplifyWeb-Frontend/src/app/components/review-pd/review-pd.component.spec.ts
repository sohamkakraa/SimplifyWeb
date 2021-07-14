import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPdComponent } from './review-pd.component';

describe('ReviewPdComponent', () => {
  let component: ReviewPdComponent;
  let fixture: ComponentFixture<ReviewPdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
