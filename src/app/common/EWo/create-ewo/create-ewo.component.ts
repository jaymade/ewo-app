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
  // timeStamp = this.currentDate();
  sourced = false;
  startDate = this.currentDate();

  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    const sourced = false;

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
      request: new FormControl('choose', {
        validators: [Validators.required]
      }),
      priority: new FormControl('choose', {
        validators: [Validators.required]
      }),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      descript: new FormControl(null, {
        validators: [Validators.required]
      }),
      status: new FormControl('active'),
      outsourced: new FormControl(false),
      eoq: new FormControl(null),
      asq: new FormControl(null),
      moq: new FormControl(null),
      oqp: new FormControl(null),
      vendnum: new FormControl(null),
      leadtime: new FormControl(null)
    });

    this.ewoForm.controls['startDate'].setValue(this.currentDate());
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  onSourceChange(value: boolean) {
    const toggle = value;
    this.sourced = toggle;
  }

  onSaveEwo() {
    if (this.ewoForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.ewoService.addEwo(
      this.ewoForm.value.starter,
      this.ewoForm.value.startDate,
      this.ewoForm.value.title,
      this.ewoForm.value.descript
    );

    this.ewoForm.reset();
  }
}
