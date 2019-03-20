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
    console.log('%c F.E. ewo.service.getEwo()  param ID: ', 'color:green;', id);
    // return { ...this.ewos.find(e => e._id === id) };
    return this.http.get<{
      _id: string;
      startDate: string;
      starter: string;
      team: string;
      reqtype: string;
      partNum: string;
      priority: string;
      title: string;
      descript: string;
      status: string;
      eoq: string;
      asq: string;
      moq: string;
      oqp: string;
      vendnum: string;
      leadtime: string;
      assignment: string;
      lastupdated: string;
      timestamp: string;
      completed: string;
      hours: string;
      imagePath: string;
    }>('http://172.16.1.50:3000/api/ewos/' + id);
  }

  getEwoUpdatedListener() {
    return this.ewosUpdated.asObservable();
  }

  addEwo(
    startDate: string,
    starter: string,
    team: string,
    reqtype: string,
    partNum: string,
    priority: string,
    title: string,
    descript: string,
    eoq: string,
    asq: string,
    moq: string,
    oqp: string,
    vendnum: string,
    leadtime: string,
    assignment: string,
    lastupdated: string,
    timestamp: string,
    completed: string,
    hours: string,
    image: File
  ) {
    // const ewo: Ewo = {
    //   startDate: startDate,
    //   starter: starter,
    //   team: team,
    //   reqtype: reqtype,
    //   partNum: partNum,
    //   priority: priority,
    //   title: title,
    //   descript: descript,
    //   eoq: eoq,
    //   asq: asq,
    //   moq: moq,
    //   oqp: oqp,
    //   vendnum: vendnum,
    //   leadtime: leadtime,
    //   _id: null,
    //   status: 'Unassigned',
    //   assignment: 'No One',
    //   lastupdated: 'TBD',
    //   timestamp: 'TBD',
    //   completed: 'TBD',
    //   hours: 'TBD',

    // };

    const ewoFormData = new FormData();

    ewoFormData.append('startDate', startDate);
    ewoFormData.append('starter', starter);
    ewoFormData.append('team', team);
    ewoFormData.append('reqtype', reqtype);
    ewoFormData.append('partNum', partNum);
    ewoFormData.append('priority', priority);
    ewoFormData.append('title', title);
    ewoFormData.append('descript', descript);
    ewoFormData.append('eoq', eoq);
    ewoFormData.append('asq', asq);
    ewoFormData.append('moq', moq);
    ewoFormData.append('oqp', oqp);
    ewoFormData.append('vendnum', vendnum);
    ewoFormData.append('leadtime', leadtime);
    ewoFormData.append('status', 'Unassigned');
    ewoFormData.append('assignment', 'No One');
    ewoFormData.append('lastupdated', 'TBD');
    ewoFormData.append('timestamp', 'TBD');
    ewoFormData.append('completed', 'TBD');
    ewoFormData.append('hours', 'TBD');
    ewoFormData.append('image', image, title);

    this.http
      .post<{ message: string; ewo: Ewo }>(
        'http://172.16.1.50:3000/api/ewos',
        ewoFormData
      )
      .subscribe(responseData => {
        // console.log(responseData.message);
        const ewo: Ewo = {
          _id: responseData.ewo._id,
          startDate: startDate,
          starter: starter,
          team: team,
          reqtype: reqtype,
          partNum: partNum,
          priority: priority,
          title: title,
          descript: descript,
          eoq: eoq,
          asq: asq,
          moq: moq,
          oqp: oqp,
          vendnum: vendnum,
          leadtime: leadtime,
          status: status,
          assignment: assignment,
          lastupdated: lastupdated,
          timestamp: timestamp,
          completed: completed,
          hours: hours,
          imagePath: responseData.ewo.imagePath
        };
        // const id = responseData.ewoId;
        // ewo._id = id;
        this.ewos.push(ewo);
        // to refresh list
        this.ewosUpdated.next([...this.ewos]);
        console.log('sent from addEWO: ', this.ewos);
        this.router.navigate(['/ewos']);
      });
  }
  getEwoList() {
    this.http
      .get<{ message: string; ewos: any }>('http://172.16.1.50:3000/api/ewos')
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
        // console.log('FE getEWO Sub', this.ewos);
        this.ewosUpdated.next([...this.ewos]);
      });
  }

  updateEwo(
    _id: string,
    startDate: string,
    starter: string,
    team: string,
    reqtype: string,
    partNum: string,
    priority: string,
    title: string,
    descript: string,
    status: string,
    eoq: string,
    asq: string,
    moq: string,
    oqp: string,
    vendnum: string,
    leadtime: string,
    assignment: string,
    lastupdated: string,
    timestamp: string,
    completed: string,
    hours: string,

  ) {
    const ewo: Ewo = {
      _id: _id,
      startDate: startDate,
      starter: starter,
      team: team,
      reqtype: reqtype,
      partNum: partNum,
      priority: priority,
      title: title,
      descript: descript,
      status: status,
      eoq: eoq,
      asq: asq,
      moq: moq,
      oqp: oqp,
      vendnum: vendnum,
      leadtime: leadtime,
      assignment: assignment,
      lastupdated: lastupdated,
      timestamp: timestamp,
      completed: completed,
      hours: hours,
      imagePath: null
    };
    this.http
      .put('http://172.16.1.50:3000/api/ewos/' + _id, ewo)
      .subscribe(response => {
        const updatedEwos = [...this.ewos];
        const oldEwosIndex = updatedEwos.findIndex(e => e._id === ewo._id);
        updatedEwos[oldEwosIndex] = ewo;
        this.ewos = updatedEwos;
        console.log('updated FE updatedEWOS: ', this.ewos);
        this.ewosUpdated.next([...this.ewos]);
        this.router.navigate(['/ewos']);
      });
  }

  // delete EWO
  deleteEwo(ewoId: string) {
    this.http
      .delete('http://172.16.1.50:3000/api/ewos/' + ewoId)
      .subscribe(() => {
        console.log('Deleted EWO: ' + ewoId);
        const updatedEwos = this.ewos.filter(ewo => ewo._id !== ewoId);
        this.ewos = updatedEwos;
        this.ewosUpdated.next([...this.ewos]);
      });
  }
}
