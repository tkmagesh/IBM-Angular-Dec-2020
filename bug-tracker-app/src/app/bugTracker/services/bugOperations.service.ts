import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/Bug';


import { BugApiService } from './bugApi.service';

@Injectable()
export class BugOperationsService{

    constructor(private bugApi : BugApiService){

    }

    getAll() : Observable<Bug[]>{
        return this.bugApi.getAll();
    }

    createNew(bugName : string) : Observable<Bug> {
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugApi.save(toggledBugData);
        
    }

    remove(bug : Bug) : Observable<any> {
        return this.bugApi.remove(bug);
    }
}

//using the bugStorage service

/* 
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){

    }

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }

    createNew(bugName : string) : Bug {
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Bug {
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBugData);
    }

    remove(bug : Bug) : void {
        this.bugStorage.remove(bug);
    }
} */