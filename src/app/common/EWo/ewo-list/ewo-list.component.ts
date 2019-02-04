import { Component, Input, OnInit } from '@angular/core';
import { Ewo } from '../../../models/ewo.model';
// import { EwoService } from '../../../service/ewo.service';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit {
  @Input() ewos: Ewo[] = [
    // {
    //   userId: 'Billy',
    //   ewoId: 1,
    //   title: 'delectus aut autem',
    //   completed: false
    // },
    // {
    //   userId: 'Greg',
    //   ewoId: 2,
    //   title: 'delicious goodies are fun to eat',
    //   completed: true
    // },
    // {
    //   userId: 'unassigned',
    //   ewoId: 3,
    //   title: 'geter dun',
    //   completed: false
    // }
  ];

  // constructor(private ewoService: EwoService) {}

  ngOnInit() {}
}
