import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';

@Component({
  selector: 'app-detail-ewo',
  templateUrl: './detail-ewo.component.html',
  styleUrls: ['./detail-ewo.component.scss']
})
export class DetailEwoComponent implements OnInit {

  ewo: Ewo;
  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.ewoId = paramMap.get('ewoId');
      this.ewoService.getEwo(this.ewoId).subscribe(ewoData => {
        this.ewo = {
          _id: ewoData._id,
          startDate: ewoData.startDate,
          starter: ewoData.starter,
          team: ewoData.team,
          reqtype: ewoData.reqtype,
          priority: ewoData.priority,
          title: ewoData.title,
          descript: ewoData.descript,
          status: ewoData.status,
          eoq: ewoData.eoq,
          asq: ewoData.asq
        };
      });
    });
  }
}

