import { Component } from '@angular/core';
import { AppService } from '../../index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedLang: string = 'en';
  langList = [
    {
      title: 'en',
    },
    {
      title: 'ar',
    },
  ];
  constructor(private appServices: AppService) {
    let storedLang: string = String(localStorage.getItem('lang'));
    if (storedLang) {
      storedLang = storedLang == 'null' ? 'en' : storedLang
      this.selectedLang = storedLang;
      this.switchLang(storedLang);
    }
  }
  toggleLang(lang: any) {
    this.selectedLang = lang.title;
    this.switchLang(lang.title);
    this.storeSelectedLang(lang.title);
  }
  switchLang(val: string) {
    return this.appServices.lang$.next(val);
  }

  storeSelectedLang(lang: string) {
    localStorage.setItem('lang', lang);
  }
}
