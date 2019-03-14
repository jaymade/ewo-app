import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EwoService } from './../service/ewo.service';
import { UserService } from 'src/app/service/user.service';
import { Ewo } from './../models/ewo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  isLoading = false;
  ewos: Ewo[] = [];
  ewo: Ewo;
  token;
  eng;
  admin;
  active;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private ewoId: string;
  private ewosSub: Subscription;

  constructor(
    public ewoService: EwoService,
    public userService: UserService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authListenerSubs = this.userService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

    this.isLoading = true;
    this.ewoService.getEwoList();
    this.ewosSub = this.ewoService
      .getEwoUpdatedListener()
      .subscribe((ewos: Ewo[]) => {
        this.isLoading = false;
        this.ewos = ewos;
      });
  }
  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }
}
