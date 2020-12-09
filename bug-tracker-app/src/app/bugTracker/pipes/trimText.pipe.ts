import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    
    transform(value: any, maxLength : number = 30) : string {
        return value.length < maxLength ? value : value.substring(0,maxLength) + '...'
    }

}