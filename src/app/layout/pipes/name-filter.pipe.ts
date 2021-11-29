import {Pipe, PipeTransform} from '@angular/core';
import {Pet} from "../../model/pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Pet[], searchText: string): Pet[] {
    searchText = searchText.toLowerCase()
    return value.filter((pet) => pet.name.toLowerCase().includes(searchText));
  }

}
