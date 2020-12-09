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

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick(){
        /* for (let index = this.bugs.length-1; index >= 0; index--) {
            if (this.bugs[index].isClosed) {
                this.bugs.splice(index, 1);
            }
            
        } */
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }
}
