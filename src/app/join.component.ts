import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'join', pure:false})
export class jp implements PipeTransform{
    transform(value:any): string{
        return value.join(',');
    }
}