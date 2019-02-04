import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ewo } from '../../../models/ewo.model';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  public enteredTitle = '';
  public enteredDescript = '';
  @Output() ewoCreated = new EventEmitter<Ewo>();

  constructor() {}

  ngOnInit() {}
  onAddEwo() {
    const ewo: Ewo = {
      title: this.enteredTitle,
      descript: this.enteredDescript
    };
    this.ewoCreated.emit(ewo);
  }
}
