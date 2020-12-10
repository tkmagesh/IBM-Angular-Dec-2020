import { Bug } from '../models/Bug';

export class BugOperationsService{

    createNew(bugName : string) : Bug {
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }

    toggle(bugToToggle : Bug) : Bug {
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return toggledBug;
    }
}