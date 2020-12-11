import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html',
    styleUrls: ['./bugTracker.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BugTrackerComponent implements OnInit, OnDestroy {
    
    bugs : Bug[] = [];
    rangeValue : number = 20;

    sortAttr : string = '';
    sortByDesc : boolean = false;

    constructor(
        private bugOpetations : BugOperationsService
    ){
        
    }

    ngOnInit() {
        this.bugOpetations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    ngOnDestroy() {

    }

    onNewBugCreated(newBug : Bug) {
        this.bugs = [...this.bugs, newBug];
    }

    onBugClick(bugToToggle : Bug){
        this.bugOpetations
            .toggle(bugToToggle)
            .subscribe(toggledBug => {
                this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
            });
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOpetations
            .remove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
            })
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
