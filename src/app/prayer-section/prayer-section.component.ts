import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import {
  PrayerSectionHttpService,
  PrayerTimesDTO,
} from './prayer-section.service';
import { formatDate } from '@angular/common';

interface PrayerTimes {
  date: string;
  timings: {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
}

@Component({
  selector: 'app-prayer-section',
  imports: [CardLayoutComponent],
  templateUrl: './prayer-section.component.html',
  styleUrl: './prayer-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrayerSectionComponent {
  private readonly prayerService = inject(PrayerSectionHttpService);

  // ✅ Signals for today's and tomorrow's prayer times
  public currentDayPrayer = signal<PrayerTimes | null>(null);
  public nextDayPrayer = signal<PrayerTimes | null>(null);

  public constructor() {
    this.prayerService.getPrayerTimesForTodayAndTomorrow().subscribe({
      next: ({ today, tomorrow }) => {
        this.currentDayPrayer.set(convertResponseToPrayerTimes(today));
        this.nextDayPrayer.set(convertResponseToPrayerTimes(tomorrow));
      },
      error: (err) => console.error('Error fetching prayer times:', err),
    });
  }
}

/**
 * Converts the API response to a formatted PrayerTimes object.
 */
const convertResponseToPrayerTimes = (
  response: PrayerTimesDTO
): PrayerTimes => {
  const { date, timings } = response.data;

  // Convert date from "YYYY-MM-DD" to Date object
  const dateParts = date.gregorian.date.split('-'); // Example: "09-03-2025"
  const dateObj = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

  return {
    date: formatDate(dateObj, 'd MMMM yyyy', 'nl'), // ✅ Format in Dutch
    timings,
  };
};
