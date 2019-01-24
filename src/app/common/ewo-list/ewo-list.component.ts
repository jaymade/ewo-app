import { Component, OnInit } from '@angular/core';
import Ewos from '../../../assets/ewos.json';
@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit {


  constructor() {
    console.log('Reading json');
    console.log(Ewos);


   }

  ngOnInit() {
  }

}
