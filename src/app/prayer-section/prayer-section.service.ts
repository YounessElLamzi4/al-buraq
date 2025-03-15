import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

export interface PrayerTimesDTO {
  data: {
    date: {
      gregorian: {
        day: string;
        month: { number: number; en: string };
        year: string;
        date: string;
      };
    };
    timings: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PrayerSectionHttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = 'https://api.aladhan.com/v1';

  /**
   * Fetches prayer times for a specific date.
   * @param date - Date in format DD-MM-YYYY
   */
  public getPrayerTimesByDate(date: string): Observable<PrayerTimesDTO> {
    const url = `${this.baseUrl}/timingsByCity/${date}?city=Mechelen&country=Belgium&method=2`;

    return this.httpClient.get<PrayerTimesDTO>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getPrayerTimesForTodayAndTomorrow(): Observable<{
    today: PrayerTimesDTO;
    tomorrow: PrayerTimesDTO;
  }> {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatToDDMMYYYY = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const todayStr = formatToDDMMYYYY(today);
    const tomorrowStr = formatToDDMMYYYY(tomorrow);

    return forkJoin({
      today: this.getPrayerTimesByDate(todayStr),
      tomorrow: this.getPrayerTimesByDate(tomorrowStr),
    });
  }
}
