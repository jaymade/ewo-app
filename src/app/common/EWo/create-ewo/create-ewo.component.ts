import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  form: FormGroup;
  enteredTitle = '';
  enteredDescript = '';
  isLoading = false;
  ewo: Ewo;
  mode = 'create';
  btnTxt = 'Save';
  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      descript: new FormControl(null, { validators: [Validators.required] }),
      status: new FormControl('active', { validators: [Validators.required] })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('ewoId')) {
        this.mode = 'edit';
        this.btnTxt = 'Update';
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
          this.form.setValue({
            title: this.ewo.title,
            descript: this.ewo.descript,
            status: this.ewo.status
          });
        });
      } else {
        this.mode = 'create';
        this.ewoId = null;
      }
    });
  }
  onSaveEwo() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.ewoService.addEwo(this.form.value.title, this.form.value.descript); // check to see if status needs adding
    } else {
      this.ewoService.updateEwo(
        this.ewoId,
        this.form.value.title,
        this.form.value.descript,
        this.form.value.status
      );
    }
    this.form.reset();
  }
}
