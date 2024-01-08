import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopesCourseComponent } from './ropes-course.component';

describe('RopesCourseComponent', () => {
  let component: RopesCourseComponent;
  let fixture: ComponentFixture<RopesCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopesCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopesCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
