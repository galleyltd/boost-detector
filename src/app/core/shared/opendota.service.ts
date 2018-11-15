import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../configs/app.config';

@Injectable({
    providedIn: 'root'
})
export class OpenDotaService {
    constructor(private http: HttpClient) { }

    getUsers(query: string): Observable<any[]> {
        return this.http.get<any>(AppConfig.endpoints.opendota.search(query));
    }
};
