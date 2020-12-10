import { Component, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html',
    styleUrls: ['./bugTracker.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BugTrackerComponent{
    
    bugs : Bug[] = [];
    rangeValue : number = 20;

    sortAttr : string = '';
    sortByDesc : boolean = false;

    constructor(private bugOpetations : BugOperationsService){
        this.bugs = this.bugOpetations.getAll();
    }

    onNewBugCreated(newBug : Bug) {
        this.bugs = [...this.bugs, newBug];
    }

    onBugClick(bugToToggle : Bug){
        const toggledBug = this.bugOpetations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOpetations.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => {
                this.onRemoveClick(closedBug);
            })
        
    }

    getClosedCount() : number {
        //console.log('getClosedCount triggered');
        return this.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0);
    }
}
