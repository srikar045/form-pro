import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerEx'
})
export class PowerExPipe implements PipeTransform {

  transform(value: number, power:number){
    var ans:number=0;
   if(power!==0){
    ans=Math.pow(value,power);
   }
    return ans;
  }

}
