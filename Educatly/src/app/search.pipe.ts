import { Pipe, PipeTransform } from '@angular/core';
import { PostInterface } from './post-interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(_PostInterface:PostInterface[],userInput:string):PostInterface[] {
    return _PostInterface.filter((par)=>par.title.includes(userInput));
  }

}
