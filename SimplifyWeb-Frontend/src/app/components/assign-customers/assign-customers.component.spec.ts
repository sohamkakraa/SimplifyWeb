import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCustomersComponent } from './assign-customers.component';

describe('AssignCustomersComponent', () => {
  let component: AssignCustomersComponent;
  let fixture: ComponentFixture<AssignCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
