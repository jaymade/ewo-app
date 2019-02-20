import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';

import { Ewo } from '../models/ewo.model';
@Injectable({
  providedIn: 'root'
})
export class EwoService {
  private ewos: Ewo[] = [];
  private ewosUpdated = new Subject<Ewo[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getEwo(id: string) {
    console.log(id);
    // return { ...this.ewos.find(e => e._id === id) };
    return this.http.get<{
      _id: string;
      startDate: string;
      starter: string;
      team: string;
      reqtype: string;
      title: string;
      descript: string;
      status: string;
    }>('http://localhost:3000/api/ewos/' + id);
  }

  getEwoUpdatedListener() {
    return this.ewosUpdated.asObservable();
  }

  addEwo(startDate: string, starter: string, team: string, reqtype: string, title: string, descript: string) {
    const ewo: Ewo = {
      startDate: startDate,
      starter: starter,
      team: team,
      reqtype: reqtype,
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
        console.log(responseData.message);
        const id = responseData.ewoId;
        ewo._id = id;
        this.ewos.push(ewo);
        // to refresh list
        this.ewosUpdated.next([...this.ewos]);
        console.log('EWOs return: ', this.ewos);
        this.router.navigate(['/ewos']);
      });
  }
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

  updateEwo(
    _id: string,
    startDate: string,
    starter: string,
    team: string,
    reqtype: string,
    title: string,
    descript: string,
    status: string
  ) {
    const ewo: Ewo = {
      _id: _id,
      startDate: startDate,
      starter: starter,
      team: team,
      reqtype: reqtype,
      title: title,
      descript: descript,
      status: status
    };
    this.http
      .put('http://localhost:3000/api/ewos/' + _id, ewo)
      .subscribe(response => {
        const updatedEwos = [...this.ewos];
        const oldEwosIndex = updatedEwos.findIndex(e => e._id === ewo._id);
        updatedEwos[oldEwosIndex] = ewo;
        this.ewos = updatedEwos;
        this.ewosUpdated.next([...this.ewos]);
        this.router.navigate(['/ewos']);
      });
  }

  // delete EWO
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
