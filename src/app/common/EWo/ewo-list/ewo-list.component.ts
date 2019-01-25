import { EwoService } from '../../../service/ewo.service';
import { Component, OnInit } from '@angular/core';
// import ewolist from '../../../../assets/data/ewos.json';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit {
  public ewos = [];
  constructor(private ewoService: EwoService) {
    // console.log('Reading local json files');
    // if (this.ewos) {
    //   console.log('got ewo JSON');
    // } else {
    //   console.log('error: no ewo JSON');
    // }
  }

  ngOnInit() {
    this.ewos = this.ewoService.getEwoList();
  }
}
