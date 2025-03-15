import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon-download',
  imports: [],
  templateUrl: './download-icon.component.html',
  styleUrl: './download-icon.component.scss',
})
export class DownloadIconComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color: string = '#000000';
}
