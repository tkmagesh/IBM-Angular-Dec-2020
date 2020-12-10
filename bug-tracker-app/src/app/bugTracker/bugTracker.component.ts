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
        this.bugs.push(this.bugOpetations.createNew('Server communication failure'))
        this.bugs.push(this.bugOpetations.createNew('Application not responding'))
        this.bugs.push(this.bugOpetations.createNew('User actions not recognized'))
        this.bugs.push(this.bugOpetations.createNew('Data integrity checks failed'))
    }

    onNewBugCreated(newBug : Bug) {
        this.bugs = [...this.bugs, newBug];
    }

    onBugClick(bugToToggle : Bug){
        const toggledBug = this.bugOpetations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        //console.log('getClosedCount triggered');
        return this.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0);
    }
}
