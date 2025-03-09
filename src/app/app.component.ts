import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ActivitySectionComponent } from './activity-section/activity-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { DonationSectionComponent } from './donation-section/donation-section.component';
import { PrayerSectionComponent } from './prayer-section/prayer-section.component';
import { SocialsSectionComponent } from './socials-section/socials-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ActivitySectionComponent,
    ContactSectionComponent,
    DonationSectionComponent,
    PrayerSectionComponent,
    SocialsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'al-buraq';
}
