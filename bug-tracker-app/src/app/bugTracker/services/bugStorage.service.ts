import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

@Injectable({
    providedIn : 'root'
})
export class BugStorageService{
    private currentBugId: number = 0;
    private storage = window.localStorage;

    getAll() : Bug[]{
        let result = [];
        for(let index = 0, count = this.storage.length; index < count;index++){
            let key = this.storage.key(index) || '';
            if (key.startsWith('bug')){
                let rawData = this.storage.getItem(key) || '',
                    bug = JSON.parse(rawData);
                result.push(bug);
                this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            }
        }
        return result;
    }

    save(bugData : Bug) : Bug {
        if (bugData.id === 0)
            bugData.id = ++this.currentBugId;
        this.storage.setItem(`bug-${bugData.id}`, JSON.stringify(bugData));
        return bugData;    
        
    }

    remove(bugData : Bug) : void {
        this.storage.removeItem(`bug-${bugData.id}`);
    }
}