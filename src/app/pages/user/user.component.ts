import { Component, OnInit, Output, Input } from '@angular/core';
import { Ewo } from '../../models/ewo.model';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  storedEwos: Ewo[] = [];

  constructor() {}

  ngOnInit() {}

  onEwoAdded(ewo) {
    this.storedEwos.push(ewo);
    console.log('stored EWOS: ', this.storedEwos);
  }
}
