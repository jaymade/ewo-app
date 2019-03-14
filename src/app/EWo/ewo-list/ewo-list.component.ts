import { Component, OnInit, OnDestroy } from '@angular/core';

import { EwoService } from '../../service/ewo.service';
import { UserService } from 'src/app/service/user.service';
import { Ewo } from '../../models/ewo.model';

import { Subscription } from 'rxjs';

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
  userIsAuthenticated = false;
  private ewosSub: Subscription;
  private authStatusSub: Subscription;

  constructor(public ewoService: EwoService, public userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.ewoService.getEwoList();
    this.ewosSub = this.ewoService
      .getEwoUpdatedListener()
      .subscribe((ewos: Ewo[]) => {
        this.isLoading = false;
        this.ewos = ewos;
        this.closedEWOs = this.ewos.filter(
          ewo => ewo.status === 'Completed'
        ).length;
        this.activeEWOs = this.ewos.filter(
          ewo => ewo.status !== 'Completed'
        ).length;
        // console.log('C: ', this.closedEWOs, 'A:', this.activeEWOs);
      });
    this.userIsAuthenticated = this.userService.getIsAuth();
    this.authStatusSub = this.userService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }
  ngOnDestroy() {
    this.ewosSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
