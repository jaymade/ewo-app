import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ewo',
  templateUrl: './edit-ewo.component.html',
  styleUrls: ['./edit-ewo.component.scss']
})
export class EditEwoComponent implements OnInit {
  login = true;
  user = 'Billy the Kid';

  constructor() { }

  ngOnInit() {
  }

}
