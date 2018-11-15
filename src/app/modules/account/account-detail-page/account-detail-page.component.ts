import { Component, OnInit } from '@angular/core';
import { OpenDotaService } from 'src/app/core/shared/opendota.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/shared/api.service';
import { AccountFeedbackResult, AccountFeedback, CheckResult } from 'src/app/core/shared/api.model';

@Component({
  selector: 'app-account-detail-page',
  templateUrl: './account-detail-page.component.html',
  styleUrls: ['./account-detail-page.component.css']
})
export class AccountDetailPageComponent implements OnInit {
  accountId: string;
  boostResult: AccountFeedback;

  constructor(
    private opendotaService: OpenDotaService,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.accountId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getAccountBoostCheck(this.accountId).subscribe(boostResult => {
      this.boostResult = boostResult.checkResults[0].accountFeedback;
      console.log(this.boostResult)
    });
  }

  analyze() {
    this.apiService.postAnalysis(this.accountId);
    alert("Analysis taks is queued.");
  }
}
