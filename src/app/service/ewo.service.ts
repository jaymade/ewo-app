import { Injectable } from '@angular/core';
import { Ewo } from '../models/ewo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EwoService {
  private ewos: Ewo[] = [];
  private ewosUpdated = new Subject<Ewo[]>();

  constructor() {}

  getEwoList() {
    return [...this.ewos];
  }

  getEwoUpdatedListener() {
    return this.ewosUpdated.asObservable();
  }

  addEwo(title: string, descript: string) {
    const ewo: Ewo =  { title: title, descript: descript, status: 'active' };
    this.ewos.push(ewo);
    this.ewosUpdated.next([...this.ewos]);
  }

}
