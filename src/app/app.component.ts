import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AppService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marketplace';
  sub1 = new Subscription()
  constructor(public translate: TranslateService, private appServices: AppService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    this.sub1 = this.appServices.lang$.subscribe(val => {
      if (val) {
        this.switchLang(val)
        this.switchDocDirection(val)
      }
    })
    
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  switchDocDirection(direction: string){
    direction === 'ar' ? document.body.classList.add('rtl') : document.body.classList.remove('rtl')
   
  }
  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

}
