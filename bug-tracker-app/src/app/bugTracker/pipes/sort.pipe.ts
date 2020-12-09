import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{ 
    (x : any, y : any) : number
}

@Pipe({
    name : 'sort',
})
export class SortPipe implements PipeTransform{

    private getDescComparerFor(comparer : Comparer) : Comparer {
        return function(x : any,y : any) : number {
            return comparer(x,y) * -1;
        }
    }

    private getComparerFor(attrName : string, isDesc : boolean ) : Comparer {
        const comparer = function comparer(x : any,y : any) : number {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0;
        }
        if (isDesc) return this.getDescComparerFor(comparer);
        return comparer;
    }

    transform(data: any[], attrName: string, isDesc : boolean = false ) : any[] {
        console.log('sort.transform triggered');
        if (!data || !data.length || !attrName) return data;
        const comparer = this.getComparerFor(attrName, isDesc);
        return data.sort(comparer);
    }

}