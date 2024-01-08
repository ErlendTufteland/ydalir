import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanoComponent } from './kano.component';

describe('KanoComponent', () => {
  let component: KanoComponent;
  let fixture: ComponentFixture<KanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
