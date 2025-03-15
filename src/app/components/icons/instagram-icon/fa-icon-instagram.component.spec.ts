import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaIconInstagramComponent } from './fa-icon-instagram.component';

describe('FaIconComponent', () => {
  let component: FaIconInstagramComponent;
  let fixture: ComponentFixture<FaIconInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaIconInstagramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaIconInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
