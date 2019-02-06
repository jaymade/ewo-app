import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';

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
      .get<{ message: string; ewos: any }>('http://localhost:3000/api/ewos')
      // .pipe(
      //   map(ewoData => {
      //     return ewoData.ewos.map(ewo => {
      //       return {
      //         title: ewo.title,
      //         discript: ewo.descript,
      //         id: ewo._id
      //       };
      //     });
      //   })
      // )
      .subscribe(mapedEwos => {
        this.ewos = mapedEwos.ewos;
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
      _id: null
    };
    this.http
      .post<{ message: string; ewoId: string }>(
        'http://localhost:3000/api/ewos',
        ewo
      )
      .subscribe(responseData => {
        // console.log(responseData.message);
        const id = responseData.ewoId;
        ewo._id = id;
        this.ewos.push(ewo);
        this.ewosUpdated.next([...this.ewos]);
      });
  }
  deleteEwo(ewoId: string) {
    this.http
      .delete('http://localhost:3000/api/ewos/' + ewoId)
      .subscribe(() => {
        // console.log('Deleted EWO: ' + ewoId);
        const updatedEwos = this.ewos.filter(ewo => ewo._id !== ewoId);
        this.ewos = updatedEwos;
        this.ewosUpdated.next([...this.ewos]);
      });
  }
}
