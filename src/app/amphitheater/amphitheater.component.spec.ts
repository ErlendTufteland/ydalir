import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphitheaterComponent } from './amphitheater.component';

describe('AmphitheaterComponent', () => {
  let component: AmphitheaterComponent;
  let fixture: ComponentFixture<AmphitheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmphitheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmphitheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
