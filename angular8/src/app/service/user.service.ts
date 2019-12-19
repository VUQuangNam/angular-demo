import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    { providedIn: 'root' }
)
export class UserService {

    constructor(
        private http: HttpClient
    ) { }
    // private readonly API_URL = 'http(s)://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/angular-demo';

    // getList(): Observable<any> {
    //     return this.http.get<any>(this.API_URL);
    // }
}
