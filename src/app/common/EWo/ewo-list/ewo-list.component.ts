import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ewo } from '../../../models/ewo.model';
import { EwoService } from '../../../service/ewo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit, OnDestroy {
  ewos: Ewo[] = [];
  private ewosSub: Subscription;
  constructor(public ewoService: EwoService) {}

  ngOnInit() {
    this.ewos = this.ewoService.getEwoList();
    this.ewosSub = this.ewoService
      .getEwoUpdatedListener()
      .subscribe((ewos: Ewo[]) => {
        this.ewos = ewos;
      });
  }
  ngOnDestroy() {
    this.ewosSub.unsubscribe();
  }
}
