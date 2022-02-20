import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string): Content[] {

    return contentArray.filter(content => {
      console.log("Video Game Title: ", content.title, " type is set to ", content.type);
      return type ? content.type === type : (!content.type || content.type === '');
    });
  }

}