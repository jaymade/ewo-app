import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';
import { Select } from '../../../models/select.model';
import { mimeType } from '../../../_helpers/mime-type.validator';


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
    { id: 'Unassigned', name: 'Unassigned' },
    { id: 'Assigned', name: 'Assigned' },
    { id: 'Completed', name: 'Completed' },
    { id: 'Canceled', name: 'Canceled' },
    { id: 'Hold', name: 'Hold' }
  ];

  ewoForm: FormGroup;
  isLoading = false;
  ewo: Ewo;
  sourced = false; // is part out sourced
  newPart = true; // new part number toggle
  startDate = this.currentDate();
  imagePreview: any;

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
      newPart: new FormControl(null),
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
      leadtime: new FormControl(null),
      image: new FormControl(null,
         { asyncValidators: [mimeType]}
      )
    });

    this.ewoForm.controls['startDate'].setValue(this.currentDate());
    this.ewoForm.controls['starter'].setValue('Jay Rich');
    this.ewoForm.controls['team'].setValue('Telcom -Sales');
    this.ewoForm.controls['reqtype'].setValue('New Design');
    this.ewoForm.controls['newPart'].setValue('true');
    this.ewoForm.controls['partNum'].setValue('xxxxxxxxxx');
    this.ewoForm.controls['priority'].setValue('4');
    this.ewoForm.controls['title'].setValue('TEST 6');
    this.ewoForm.controls['descript'].setValue('6 TEST tickles');
    this.ewoForm.controls['eoq'].setValue('22');
    this.ewoForm.controls['asq'].setValue('33');
    this.ewoForm.controls['moq'].setValue('44');
    this.ewoForm.controls['oqp'].setValue('55');
    this.ewoForm.controls['vendnum'].setValue('VINMUMBER123');
    this.ewoForm.controls['leadtime'].setValue('4 score & 7 years');
    // this.ewoForm.controls['assignment'].setValue('No One');
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  onSourceChange(value: boolean) {
    const toggle = value;
    this.sourced = toggle;
  }
  onPartChange() {
    // const toggle = value;
    this.newPart = !this.newPart;
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.ewoForm.patchValue({ image: file });
    this.ewoForm.get('image').updateValueAndValidity();
    // console.log('FILE: ', file);
    // console.log('FORM: ', this.ewoForm);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = <string>reader.result; // website reference to patch error
    };
    reader.readAsDataURL(file);

  }
  onSaveEwo() {
    if (this.ewoForm.invalid) {
      return;
    }
    this.isLoading = true;

    this.ewoService.addEwo(
      this.ewoForm.value.startDate,
      this.ewoForm.value.starter,
      this.ewoForm.value.team,
      this.ewoForm.value.reqtype,
      this.ewoForm.value.partNum,
      this.ewoForm.value.priority,
      this.ewoForm.value.title,
      this.ewoForm.value.descript,
      this.ewoForm.value.eoq,
      this.ewoForm.value.asq,
      this.ewoForm.value.moq,
      this.ewoForm.value.oqp,
      this.ewoForm.value.vendnum,
      this.ewoForm.value.leadtime,
      this.ewoForm.value.assignment,
      this.ewoForm.value.lastupdated,
      this.ewoForm.value.timestamp,
      this.ewoForm.value.completed,
      this.ewoForm.value.hours
    );

    this.ewoForm.reset();
  }


}
