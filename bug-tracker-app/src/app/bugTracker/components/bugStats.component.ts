import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
    selector : 'app-bug-stats',
    template : `
        <div>
            {{getCurrentTime()}}
        </div>
        <section class="stats">
            <span class="closed">{{ list | closedCount }}</span>
            <span> / </span>
            <span>{{list.length}}</span>
        </section>
    `,
    changeDetection : ChangeDetectionStrategy.OnPush
   
})
export class BugStatsComponent{

    @Input('data')
    list : Bug[] = [];

    getCurrentTime() : string{
        return new Date().toTimeString();
    }
    
}