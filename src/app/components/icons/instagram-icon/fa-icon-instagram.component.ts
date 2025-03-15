import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon-instagram',
  templateUrl: './fa-icon-instagram.component.html',
  styleUrls: ['./fa-icon-instagram.component.scss'],
})
export class FaIconInstagramComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color: string = '#000000';
}
