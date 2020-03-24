import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'esp'})
export class es implements PipeTransform{
    transform(value:number): string{
        return value==1? "John" :"Paul";
    }
}