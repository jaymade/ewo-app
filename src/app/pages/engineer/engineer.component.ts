import { ActivatedRoute, ParamMap } from '@angular/router';
import { EwoService } from './../../service/ewo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ewo } from './../../models/ewo.model';
@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  isLoading = false;
  ewos: Ewo[] = [];
  ewo: Ewo;
  private ewoId: string;
  private ewosSub: Subscription;

  constructor(public ewoService: EwoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.ewoService.getEwoList();
    this.ewosSub = this.ewoService
      .getEwoUpdatedListener()
      .subscribe((ewos: Ewo[]) => {
        this.isLoading = false;
        this.ewos = ewos;
      });

    // get individual ewo
    //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //     this.ewoId = paramMap.get('ewoId');
    //     this.ewoService.getEwo(this.ewoId).subscribe(ewoData => {
    //       this.ewo = {
    //         _id: ewoData._id,
    //         startDate: ewoData.startDate,
    //         starter: ewoData.starter,
    //         title: ewoData.title,
    //         descript: ewoData.descript,
    //         status: ewoData.status
    //       };
    //     });
    //   });
  }

  onDeleteEwo(ewoId: string) {
    this.ewoService.deleteEwo(ewoId);
  }
}
