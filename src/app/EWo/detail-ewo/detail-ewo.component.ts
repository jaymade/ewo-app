import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EwoService } from '../../service/ewo.service';
import { UserService } from '../../service/user.service';
import { Ewo } from '../../models/ewo.model';
import { Select } from './../../models/select.model';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail-ewo',
  templateUrl: './detail-ewo.component.html',
  styleUrls: ['./detail-ewo.component.scss']
})
export class DetailEwoComponent implements OnInit, OnDestroy {
  engineer = true;
  ewo: Ewo;
  userIsAuthenticated = false;
  ewoUpdateForm: FormGroup;
  timestamp = this.currentDate();

  assignments: Select[] = [
    { id: 'No One', name: 'No One' },
    { id: 'Billy Unger', name: 'Billy Unger' },
    { id: 'Greg Barbee', name: 'Greg Barbee' },
    { id: 'Joe Dunagin', name: 'Joe Dunagin' },
    { id: 'Robert Hyde', name: 'Robert Hyde' },
    { id: 'Donald Talley', name: 'Donald Talley' },
    { id: 'Steve Jenkins', name: 'Steve Jenkins' },
    { id: 'Jay Rich', name: 'Jay Rich' }
  ];

  statuses: Select[] = [
    { id: 'Unassigned', name: 'Unassigned' },
    { id: 'Assigned', name: 'Assigned' },
    { id: 'Completed', name: 'Completed' },
    { id: 'Canceled', name: 'Canceled' },
    { id: 'Hold', name: 'Hold' }
  ];

  requests: Select[] = [
    { id: 'choose', name: 'Choose One' },
    { id: 'Assembly', name: 'Assembly' },
    { id: 'Color Change', name: 'Color Change' },
    { id: 'Tolerance Change', name: 'Tolerance Change' },
    { id: 'Fixture', name: 'Fixture' },
    { id: 'Process Change Request', name: 'Process Change Request' },
    { id: 'Machine Program', name: 'Machine Program' },
    { id: 'New Design', name: 'New Design' },
    { id: 'Part Modification', name: 'Part Modification' },
    { id: 'New Color', name: 'New Color' },
    { id: 'Miscellaneous', name: 'Miscellaneous' },
    { id: 'Quote', name: 'Quote' },
    { id: 'Part Number', name: 'Part Number' },
    { id: 'Routing Change', name: 'Routing Change' }
  ];

  private ewoId: string;
  private authListenerSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public ewoService: EwoService,
    public userService: UserService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.ewoId = paramMap.get('ewoId');
      this.ewoService.getEwo(this.ewoId).subscribe(ewoData => {
        this.ewo = {
          _id: ewoData._id,
          startDate: ewoData.startDate,
          starter: ewoData.starter,
          team: ewoData.team,
          reqtype: ewoData.reqtype,
          custName: ewoData.custName,
          custContact: ewoData.custContact,
          needDate: ewoData.needDate,
          partNum: ewoData.partNum,
          priority: ewoData.priority,
          title: ewoData.title,
          descript: ewoData.descript,
          status: ewoData.status,
          eoq: ewoData.eoq,
          asq: ewoData.asq,
          moq: ewoData.moq,
          oqp: ewoData.oqp,
          vendnum: ewoData.vendnum,
          leadtime: ewoData.leadtime,
          assignment: ewoData.assignment,
          lastupdated: ewoData.lastupdated,
          completed: ewoData.completed,
          timestamp: ewoData.timestamp,
          hours: ewoData.hours,
          imagePath: ewoData.imagePath,
          ewoid: ewoData.ewoid
        };

        const stat = this.ewo.status;
        const req = this.ewo.reqtype;
        const eng = this.ewo.assignment;
        const hours = this.ewo.hours;
        const descript = this.ewo.descript;
        // form
        this.ewoUpdateForm = new FormGroup({
          assignment: new FormControl(null, {
            validators: [Validators.required]
          }),
          status: new FormControl(null, {
            validators: [Validators.required]
          }),
          lastupdated: new FormControl(null, {
            validators: [Validators.required]
          }),
          hours: new FormControl(null, {
            validators: [Validators.required]
          }),
          reqtype: new FormControl(null, {
            validators: [Validators.required]
          }),
          descript: new FormControl(null, {
            validators: [Validators.required]
          })
        });
        // console.log('%c STAT: ', 'color:red', this.stat);
        this.ewoUpdateForm.controls['assignment'].setValue(eng);
        this.ewoUpdateForm.controls['status'].setValue(stat);
        this.ewoUpdateForm.controls['reqtype'].setValue(req);
        this.ewoUpdateForm.controls['lastupdated'].setValue(this.timestamp);
        this.ewoUpdateForm.controls['hours'].setValue(hours);
        this.ewoUpdateForm.controls['descript'].setValue(descript);
      });
    });
    this.userIsAuthenticated = this.userService.getIsAuth();
    this.authStatusSub = this.userService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  onUpdateEwo() {
    if (this.ewoUpdateForm.invalid) {
      return;
    }
    // this.isLoading = true;
    this.ewoService.updateEwo(
      this.ewo._id,
      this.ewo.startDate,
      this.ewo.starter,
      this.ewo.team,
      this.ewoUpdateForm.value.reqtype,
      this.ewoUpdateForm.value.custName,
      this.ewoUpdateForm.value.custContact,
      this.ewoUpdateForm.value.needDate,
      this.ewoUpdateForm.value.partNum,
      this.ewo.priority,
      this.ewo.title,
      this.ewoUpdateForm.value.descript,
      this.ewoUpdateForm.value.status,
      this.ewo.eoq,
      this.ewo.asq,
      this.ewo.moq,
      this.ewo.oqp,
      this.ewo.vendnum,
      this.ewo.leadtime,
      this.ewoUpdateForm.value.assignment,
      this.ewoUpdateForm.value.lastupdated,
      this.ewoUpdateForm.value.timestamp,
      this.ewoUpdateForm.value.completed,
      this.ewoUpdateForm.value.hours,
      this.ewoUpdateForm.value.ewoid,
    );
    this.ewoUpdateForm.reset();
  }
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }
}
