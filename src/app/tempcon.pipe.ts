import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempcon'
})
export class TempconPipe implements PipeTransform {

  transform(value: number,unit:string){
    var temperature:number=0;
    if(value && !isNaN(value)) {
        if (unit === 'C') {
            temperature = (value - 32) /1.8 ;
           
        } else if (unit === 'F'){
             temperature = (value * 1.8 ) + 32
            
        }
        return temperature.toFixed(2);
    }
    return ;
  }

}
