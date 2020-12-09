import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
    name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
    transform(bugs: Bug[]) {
        console.log('closedCount.transform triggered');
        return bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1: prevResult, 0);
    }

}