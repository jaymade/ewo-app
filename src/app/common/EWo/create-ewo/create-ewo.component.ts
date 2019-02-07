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
  EWO: Ewo;
  mode = 'create';
  ewoId: string;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('ewoId')) {
        this.mode = 'edit';
        this.ewoId = paramMap.get('ewoId');
        this.EWO = this.ewoService.getEwo(this.ewoId);
      } else {
        this.mode = 'create';
        this.ewoId = null;
      }
    });
  }
  onAddEwo(form: NgForm) {
    this.ewoService.addEwo(form.value.title, form.value.descript);
    form.resetForm();
  }
}
