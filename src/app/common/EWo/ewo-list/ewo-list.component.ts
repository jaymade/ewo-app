import { Component, OnInit } from '@angular/core';
import { EwoService } from '../../../service/ewo.service';
// import ewolist from '../../../../assets/data/ewos.json';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit {
  public ewos = [];
  constructor(private ewoService: EwoService) {}

  ngOnInit() {
    this.ewos = this.ewoService.getEwoList();
  }
}
