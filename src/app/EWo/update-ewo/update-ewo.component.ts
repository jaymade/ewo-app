import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EwoService } from 'src/app/service/ewo.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Ewo } from '../../models/ewo.model';
import { Select } from '../../models/select.model';
import { SourceNode } from 'source-list-map';

@Component({
  selector: 'app-update-ewo',
  templateUrl: './update-ewo.component.html',
  styleUrls: ['./update-ewo.component.scss']
})
export class UpdateEwoComponent implements OnInit {
  ewoUpdateForm: FormGroup;
  isLoading = false;
  ewo: Ewo;
  sourced = false;
  timestamp = this.currentDate();
  private ewoId: string;

  constructor(private ewoService: EwoService, route: ActivatedRoute) { }

  ngOnInit() { }
  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  onUpdateEwo() {
    this.ewoService.updateEwo(
      this.ewoId,
      this.ewoUpdateForm.value.starter,
      this.ewoUpdateForm.value.startDate,
      this.ewoUpdateForm.value.team,
      this.ewoUpdateForm.value.reqtype,
      this.ewoUpdateForm.value.custName,
      this.ewoUpdateForm.value.custContact,
      this.ewoUpdateForm.value.needDate,
      this.ewoUpdateForm.value.partNum,
      this.ewoUpdateForm.value.priority,
      this.ewoUpdateForm.value.title,
      this.ewoUpdateForm.value.descript,
      this.ewoUpdateForm.value.status,
      this.ewoUpdateForm.value.eoq,
      this.ewoUpdateForm.value.asq,
      this.ewoUpdateForm.value.moq,
      this.ewoUpdateForm.value.oqp,
      this.ewoUpdateForm.value.vendnum,
      this.ewoUpdateForm.value.leadtime,
      this.ewoUpdateForm.value.assignment,
      this.ewoUpdateForm.value.lastupdated,
      this.ewoUpdateForm.value.timestamp,
      this.ewoUpdateForm.value.completed,
      this.ewoUpdateForm.value.hours,
      this.ewoUpdateForm.value.ewoid,
    );
  }
}
