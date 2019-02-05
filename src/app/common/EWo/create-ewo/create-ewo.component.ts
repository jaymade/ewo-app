import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EwoService } from '../../../service/ewo.service';

@Component({
  selector: 'app-create-ewo',
  templateUrl: './create-ewo.component.html',
  styleUrls: ['./create-ewo.component.scss']
})
export class CreateEwoComponent implements OnInit {
  public enteredTitle = '';
  public enteredDescript = '';

  constructor(public ewoService: EwoService) {}

  ngOnInit() {}
  onAddEwo(form: NgForm) {
    this.ewoService.addEwo( form.value.title, form.value.descript);
    form.resetForm();
  }
}
