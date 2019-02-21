import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';
import { Select } from '../../../models/select.model';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  departments: Select[] = [
    { id: 'choose', name: 'Choose One' },
    { id: 'Telcom -Sales', name: 'Telcom -Sales' },
    { id: 'Contract - Sales', name: 'Contract - Sales' },
    { id: 'Dimension Change', name: 'Dimension Change' },
    { id: 'Development', name: 'Development' },
    { id: 'Purchasing', name: 'Purchasing' },
    { id: 'Quaility', name: 'Quaility' },
    { id: 'Sr-MGR Team', name: 'Sr-MGR Team' },
    { id: 'MNFT Engineer', name: 'MNFT Engineer' },
    { id: 'Sheet Metal', name: 'Sheet Metal' },
    { id: 'Heavy Metal', name: 'Heavy Metal' },
    { id: 'Welding', name: 'Welding' },
    { id: 'Finishing', name: 'Finishing' },
    { id: 'Assembly', name: 'Assembly' },
    { id: 'Kitting', name: 'Kitting' }
  ];

  requests: Select[] = [
    { id: 'choose', name: 'Choose One' },
    { id: 'Assembly', name: 'Assembly' },
    { id: 'Color Change', name: 'Color Change' },
    { id: 'Tolerance Change', name: 'Tolerance Change' },
    { id: 'Fixture', name: 'Fixture' },
    { id: 'Process Change Request', name: 'Process Change Request' },
    { id: 'Machine Program', name: 'Machine Program' },
    { id: 'New Design', name: 'New Design' },
    { id: 'Part Modification', name: 'Part Modification' },
    { id: 'New Color', name: 'New Color' },
    { id: 'Miscellaneous', name: 'Miscellaneous' },
    { id: 'Quote', name: 'Quote' },
    { id: 'Part Number', name: 'Part Number' },
    { id: 'Routing Change', name: 'Routing Change' }
  ];

  priorities: Select[] = [
    { id: 'choose', name: 'Choose One' },
    { id: '1', name: '1-When You Can' },
    { id: '2', name: '2-ASAP' },
    { id: '3', name: '3-Order Pending' },
    { id: '4', name: '4-Urgent' },
    { id: '5', name: '5-Hot Stuff' }
  ];

  statuses: Select[] = [
    { id: 'choose', name: 'Choose One' },
    { id: '1', name: '1-Unassigned' },
    { id: '2', name: '2-Assigned' },
    { id: '3', name: '3-Completed' },
    { id: '4', name: '4-Canceled' },
    { id: '5', name: '5-Hold' }
  ];

  ewoForm: FormGroup;
  // enteredTitle = '';
  // enteredDescript = '';
  isLoading = false;
  ewo: Ewo;
  sourced = false; // is part out sourced
  newPart = true; // new part number toggle
  startDate = this.currentDate();

  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.ewoForm = new FormGroup({
      startDate: new FormControl(null, {
        validators: [Validators.required]
      }),
      starter: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      team: new FormControl('choose', {
        validators: [Validators.required]
      }),
      reqtype: new FormControl('choose', {
        validators: [Validators.required]
      }),
      newPart: new FormControl('true'),
      partNum: new FormControl(null),
      priority: new FormControl('choose', {
        validators: [Validators.required]
      }),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      descript: new FormControl(null, {
        validators: [Validators.required]
      }),
      status: new FormControl(null),
      outsourced: new FormControl(false),
      eoq: new FormControl(null),
      asq: new FormControl(null),
      moq: new FormControl(null),
      oqp: new FormControl(null),
      vendnum: new FormControl(null),
      leadtime: new FormControl(null)
    });

    this.ewoForm.controls['startDate'].setValue(this.currentDate());
    this.ewoForm.controls['starter'].setValue('Jay Rich');
    this.ewoForm.controls['team'].setValue('Telcom -Sales');
    this.ewoForm.controls['reqtype'].setValue('New Design');
    this.ewoForm.controls['title'].setValue('TEST 2');
    this.ewoForm.controls['descript'].setValue('2 TEST tickles');
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  onSourceChange(value: boolean) {
    const toggle = value;
    this.sourced = toggle;
  }
  onPartChange(value: boolean) {
    const toggle = value;
    this.newPart = toggle;
  }

  onSaveEwo() {
    if (this.ewoForm.invalid) {
      return;
    }
    this.isLoading = true;

    console.log('save EWO info: \n',  '\nWHEN: ' + this.ewoForm.value.startDate,
      '\nWHO: ' + this.ewoForm.value.starter,
      '\nTEAM: ' + this.ewoForm.value.team,
      '\nREQ: ' + this.ewoForm.value.reqtype,
      '\nWHAT: ' + this.ewoForm.value.title,
      '\nHOW: ' + this.ewoForm.value.descript);

    this.ewoService.addEwo(
      this.ewoForm.value.startDate,
      this.ewoForm.value.starter,
      this.ewoForm.value.reqtype,
      this.ewoForm.value.team,
      this.ewoForm.value.title,
      this.ewoForm.value.descript
    );


    this.ewoForm.reset();
  }
}
