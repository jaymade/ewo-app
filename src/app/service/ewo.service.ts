import { Injectable } from '@angular/core';
import ewolist from '../../assets/data/ewos.json';
import { Ewo } from '../models/ewo.model';

@Injectable({
  providedIn: 'root'
})
export class EwoService {
  constructor() {}
  getEwo(id) {}
  getEwoList() {
    return [
      {
        userId: 'Billy',
        ewoId: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 'Greg',
        ewoId: 2,
        title: 'delicious goodies are fun to eat',
        completed: true
      },
      {
        userId: 'unassigned',
        ewoId: 3,
        title: 'geter dun',
        completed: false
      }
    ];
  }
  addEwo() {}
  updateEwo() {}
  deleteEwo(ewoId) {}
}
