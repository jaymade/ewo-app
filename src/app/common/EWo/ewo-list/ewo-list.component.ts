import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ewo } from '../../../models/ewo.model';
import { EwoService } from '../../../service/ewo.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit, OnDestroy {
  ewos: Ewo[] = [];
  isLoading = false;
  closedEWOs = 0;
  activeEWOs = 0;
  private ewosSub: Subscription;

  constructor(public ewoService: EwoService) {}

  ngOnInit() {
    this.isLoading = true;
    this.ewoService.getEwoList();
    this.ewosSub = this.ewoService
      .getEwoUpdatedListener()
      .subscribe((ewos: Ewo[]) => {
        this.isLoading = false;
        this.ewos = ewos;
        this.closedEWOs = this.ewos.filter(ewo => ewo.status === 'Completed').length;
        this.activeEWOs = this.ewos.filter(ewo => ewo.status !== 'Completed').length;
        // console.log('C: ', this.closedEWOs, 'A:', this.activeEWOs);
      });


  }

  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }
  ngOnDestroy() {
    this.ewosSub.unsubscribe();
  }
}
