import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';
import { Departments } from './../../../models/departments.model';
import { Request } from './../../../models/reqtype.model';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  departments: Departments[] = [
    { id: 'Telcom -Sales', name: 'Telcom -Sales'},
    { id: 'Contract - Sales', name: 'Contract - Sales'},
    { id: 'Dimension Change', name: 'Dimension Change'},
    { id: 'Development', name: 'Development'},
    { id: 'Purchasing', name: 'Purchasing'},
    { id: 'Quaility', name: 'Quaility'},
    { id: 'Sr-MGR Team', name: 'Sr-MGR Team'},
    { id: 'MNFT Engineer', name: 'MNFT Engineer'},
    { id: 'Sheet Metal', name: 'Sheet Metal'},
    { id: 'Heavy Metal', name: 'Heavy Metal'},
    { id: 'Welding', name: 'Welding'},
    { id: 'Finishing', name: 'Finishing'},
    { id: 'Assembly', name: 'Assembly'},
    { id: 'Kitting', name: 'Kitting'}
  ];
  request: Request[] = [
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
  ewoForm: FormGroup;
  enteredTitle = '';
  enteredDescript = '';
  isLoading = false;
  ewo: Ewo;
  mode = 'create';
  btnTxt = 'Add Ewo';
  timeStamp = this.currentDate();

  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.ewoForm = new FormGroup({
      starter: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      team: new FormControl(null),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      descript: new FormControl(null, {
        validators: [Validators.required] }),
      status: new FormControl('active', {
        validators: [Validators.required] })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('ewoId')) {
        this.mode = 'edit';
        this.btnTxt = 'Update EWO';
        this.ewoId = paramMap.get('ewoId');
        this.isLoading = true;
        this.ewoService.getEwo(this.ewoId).subscribe(ewoData => {
          this.isLoading = false;
          this.ewo = {
            _id: ewoData._id,
            title: ewoData.title,
            descript: ewoData.descript,
            status: ewoData.status
          };
          this.ewoForm.setValue({
            title: this.ewo.title,
            descript: this.ewo.descript,
            status: this.ewo.status,

          });
        });
      } else {
        this.mode = 'create';
        this.ewoId = null;
      }
    });
  }

  currentDate() {
    const timeStamp = new Date();
    return timeStamp;

  }
  onSaveEwo() {
    if (this.ewoForm.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.ewoService.addEwo(
        this.ewoForm.value.title,
        this.ewoForm.value.descript, ); // check to see if status needs adding
    } else {
      this.ewoService.updateEwo(
        this.ewoId,
        this.ewoForm.value.title,
        this.ewoForm.value.descript,
        this.ewoForm.value.status
      );
    }
    this.ewoForm.reset();
  }
}
