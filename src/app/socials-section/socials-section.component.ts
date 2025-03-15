import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconFacebookComponent } from '../components/icons/facebook-icon/fa-icon-facebook.component';
import { FaIconInstagramComponent } from '../components/icons/instagram-icon/fa-icon-instagram.component';
import { FaIconArrowUpComponent } from '../components/icons/arrow-up-icon/fa-icon-arrow-up.component';

@Component({
  selector: 'app-socials-section',
  imports: [
    FaIconFacebookComponent,
    FaIconInstagramComponent,
    FaIconArrowUpComponent,
  ],
  templateUrl: './socials-section.component.html',
  styleUrl: './socials-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsSectionComponent {}
