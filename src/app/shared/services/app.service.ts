import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  lang$ = new BehaviorSubject<string>('')
  permissions$ = new BehaviorSubject<string[]>([])
  constructor() { }
}
