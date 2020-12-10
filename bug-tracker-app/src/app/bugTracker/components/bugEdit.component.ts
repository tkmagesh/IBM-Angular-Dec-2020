import { Component, EventEmitter, Output } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" #txtNewBugName>
            <input type="button" value="Add New" (click)="onAddNewClick(txtNewBugName.value)">
        </section>
    `
})
export class BugEditComponent{

    @Output()
    bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOpetations : BugOperationsService ){

    }
    onAddNewClick(bugName : string){
        const newBug = this.bugOpetations.createNew(bugName);
        //this.bugs.push(newBug);
        
        this.bugCreated.emit(newBug);
    }
}