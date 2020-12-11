import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/Bug';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BugApiService{

    private serviceEndPoint = `${environment.serviceEndPointRoot}/bugs`;

    constructor(private httpClient : HttpClient){

    }
    getAll() : Observable<Bug[]>{
        return this.httpClient.get<Bug[]>(this.serviceEndPoint);
    }
    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.httpClient.post<Bug>(this.serviceEndPoint, bugData);
        }
        return this.httpClient.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
    }
    remove(bugData : Bug) : Observable<any>{
        return this.httpClient.delete<any>(`${this.serviceEndPoint}/${bugData.id}`);
    }
}