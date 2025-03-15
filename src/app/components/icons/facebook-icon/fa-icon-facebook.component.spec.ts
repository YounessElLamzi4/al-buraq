import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaIconFacebookComponent } from './fa-icon-facebook.component';

describe('FaIconComponent', () => {
  let component: FaIconFacebookComponent;
  let fixture: ComponentFixture<FaIconFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaIconFacebookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaIconFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
