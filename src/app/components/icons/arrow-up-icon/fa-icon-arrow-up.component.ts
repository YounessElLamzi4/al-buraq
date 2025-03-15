import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon-arrow-up',
  templateUrl: './fa-icon-arrow-up.component.html',
  styleUrls: ['./fa-icon-arrow-up.component.scss'],
})
export class FaIconArrowUpComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color: string = '#000000';
}
