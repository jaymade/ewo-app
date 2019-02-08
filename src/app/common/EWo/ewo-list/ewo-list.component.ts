import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ewo } from '../../../models/ewo.model';
import { EwoService } from '../../../service/ewo.service';

@Component({
  selector: 'app-ewo-list',
  templateUrl: './ewo-list.component.html',
  styleUrls: ['./ewo-list.component.scss']
})
export class EwoListComponent implements OnInit, OnDestroy {
  ewos: Ewo[] = [];
  isLoading = false;
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
      });
  }
  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }

  ngOnDestroy() {
    this.ewosSub.unsubscribe();
  }
}
