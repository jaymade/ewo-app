import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../../service/ewo.service';
import { Ewo } from '../../../models/ewo.model';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  enteredTitle = '';
  enteredDescript = '';
  isLoading = false;
  ewo: Ewo;
  mode = 'create';
  btnTxt = 'Save';
  private ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
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
        });
      } else {
        this.mode = 'create';
        this.ewoId = null;
      }
    });
  }
  onSaveEwo(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.ewoService.addEwo(form.value.title, form.value.descript);
    } else {
      this.ewoService.updateEwo(
        this.ewoId,
        form.value.title,
        form.value.descript,
        form.value.status
      );
    }
    form.resetForm();
  }
}
