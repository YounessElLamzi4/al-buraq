import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { DownloadIconComponent } from '../components/icons/download-icon/download-icon.component';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';

@Component({
  selector: 'app-services-section',
  imports: [CardLayoutComponent, DownloadIconComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesSectionComponent {}
