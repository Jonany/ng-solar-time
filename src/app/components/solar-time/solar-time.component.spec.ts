import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarTimeComponent } from './solar-time.component';

describe('SolarTimeComponent', () => {
  let component: SolarTimeComponent;
  let fixture: ComponentFixture<SolarTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
