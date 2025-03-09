import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerSectionComponent } from './prayer-section.component';

describe('PrayerSectionComponent', () => {
  let component: PrayerSectionComponent;
  let fixture: ComponentFixture<PrayerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
