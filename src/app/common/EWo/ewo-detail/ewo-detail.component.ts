import { Component, OnInit } from '@angular/core';
import { EwoService } from 'src/app/service/ewo.service';

@Component({
  selector: 'app-ewo-detail',
  templateUrl: './ewo-detail.component.html',
  styleUrls: ['./ewo-detail.component.scss']
})
export class EwoDetailComponent implements OnInit {
  public ewos = [];
  constructor(private ewoService: EwoService) { }

  ngOnInit() {
   this.ewoService.getEwoList();
  }

}
