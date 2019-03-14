import { ActivatedRoute, ParamMap } from '@angular/router';
import { EwoService } from './../service/ewo.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ewo } from './../models/ewo.model';

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
  private ewoId: string;
  private ewosSub: Subscription;
  // private userSub: Subscription;
  private authListenerSubs: Subscription;

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
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }
}
