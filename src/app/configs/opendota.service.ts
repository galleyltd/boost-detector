import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OpenDotaService {
    constructor(private http: HttpClient) { }

    getUsers(query: String): Observable<any[]> {
        return this.http.get<any>(`https://api.opendota.com/api/search?q=${query}`);
    }
};
