import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsSectionComponent } from './socials-section.component';

describe('SocialsSectionComponent', () => {
  let component: SocialsSectionComponent;
  let fixture: ComponentFixture<SocialsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
