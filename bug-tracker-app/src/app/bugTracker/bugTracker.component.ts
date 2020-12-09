import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    
    private currentBugId: number = 0;

    bugs : Bug[] = [];

    onAddNewClick(bugName : string){
        const newBug : Bug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugs.push(newBug);
    }

    onBugClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}
