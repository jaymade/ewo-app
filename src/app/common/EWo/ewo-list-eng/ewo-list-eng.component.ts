import { Component, OnInit } from '@angular/core';
import { EwoService } from '../../../service/ewo.service';

@Component({
  selector: 'app-ewo-list-eng',
  templateUrl: './ewo-list-eng.component.html',
  styleUrls: ['./ewo-list-eng.component.scss']
})
export class EwoListEngComponent implements OnInit {
  public ewos = [];
  constructor(private ewoService: EwoService) { }

  ngOnInit() {
   this.ewoService.getEwoList();
  }

}
