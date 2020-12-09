import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    
    bugs : Bug[] = [];
    rangeValue : number = 20;

    constructor(private bugOpetations : BugOperationsService){
        this.bugs.push(this.bugOpetations.createNew('Server communication failure'))
        this.bugs.push(this.bugOpetations.createNew('Application not responding'))
        this.bugs.push(this.bugOpetations.createNew('User actions not recognized'))
        this.bugs.push(this.bugOpetations.createNew('Data integrity checks failed'))
    }

    onAddNewClick(bugName : string){
        const newBug = this.bugOpetations.createNew(bugName);
        this.bugs.push(newBug);
    }

    onBugClick(bugToToggle : Bug){
        this.bugOpetations.toggle(bugToToggle);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        return this.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0);
    }
}
