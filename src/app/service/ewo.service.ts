import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Ewo } from '../models/ewo.model';
@Injectable({
  providedIn: 'root'
})
export class EwoService {
  private ewos: Ewo[] = [];
  private ewosUpdated = new Subject<Ewo[]>();

  constructor(private http: HttpClient) {}

  getEwoList() {
    this.http
      .get<{ message: string; ewos: Ewo[] }>('http://localhost:3000/api/ewos')
      .subscribe(ewoData => {
        this.ewos = ewoData.ewos;
        this.ewosUpdated.next([...this.ewos]);
      });
  }

  getEwoUpdatedListener() {
    return this.ewosUpdated.asObservable();
  }

  addEwo(title: string, descript: string) {
    const ewo: Ewo = {
      title: title,
      descript: descript,
      status: 'active',
      id: null
    };
    this.ewos.push(ewo);
    this.ewosUpdated.next([...this.ewos]);
  }
}
