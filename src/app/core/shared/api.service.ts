import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../configs/app.config';
import { AccountFeedbackResult } from './api.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getAccountBoostCheck(accountId: string): Observable<AccountFeedbackResult> {
        return this.http.get<any>(AppConfig.endpoints.api.checkAccount(accountId));
    }

    postAnalysis(accountId: string) {
        return this.http.post(AppConfig.endpoints.api.checkAccount(accountId), null);
    }
};
