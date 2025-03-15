import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon-facebook',
  templateUrl: './fa-icon-facebook.component.html',
  styleUrls: ['./fa-icon-facebook.component.scss'],
})
export class FaIconFacebookComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color: string = '#000000';
}
