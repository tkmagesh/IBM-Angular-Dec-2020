import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/Bug';

@Injectable({
    providedIn: 'root'
})
export class BugApiService{

    private serviceEndPoint = 'http://localhost:3000/bugs';

    constructor(private httpClient : HttpClient){

    }
    getAll() : Observable<Bug[]>{
        return this.httpClient.get<Bug[]>(this.serviceEndPoint);
    }
    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.httpClient.post<Bug>('http://localhost:3000/bugs', bugData);
        }
        return this.httpClient.put<Bug>(`http://localhost:3000/bugs/${bugData.id}`, bugData);
    }
    remove(bugData : Bug) : Observable<any>{
        return this.httpClient.delete<any>(`http://localhost:3000/bugs/${bugData.id}`);
    }
}