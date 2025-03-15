import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaIconArrowUpComponent } from './fa-icon-arrow-up.component';

describe('FaIconComponent', () => {
  let component: FaIconArrowUpComponent;
  let fixture: ComponentFixture<FaIconArrowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaIconArrowUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaIconArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
