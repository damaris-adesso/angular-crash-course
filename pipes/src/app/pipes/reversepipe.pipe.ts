import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(input: string): any {
    var data = ""
    for(var i=0;i<input.length;i++){
      data = input[i]+data;
    }
    return data;
  }

}
