import { Pipe, PipeTransform } from '@angular/core';
import { HowToFilter, RowData } from '../models';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: HowToFilter): any {
        if (!items || items.length === 0) {
            return items;
        }
        let arr = items;
        if (filter.sortBy) {
            if (filter.ascending === true) {
                arr  = arr.sort((a: RowData, b: RowData) => {
                    const one = (filter.sortBy !== 'Date') ? a[filter.sortBy] : new Date(a[filter.sortBy]).getTime();
                    const two = (filter.sortBy !== 'Date') ? b[filter.sortBy] : new Date(b[filter.sortBy]).getTime();
                    if (one > two) {
                      return 1;
                  } else {
                      return -1;
                  }
                });
              } else if (filter.ascending === false) {
                arr  = arr.sort((a: RowData, b: RowData) => {
                    const one = (filter.sortBy !== 'Date') ? a[filter.sortBy] : new Date(a[filter.sortBy]).getTime();
                    const two = (filter.sortBy !== 'Date') ? b[filter.sortBy] : new Date(b[filter.sortBy]).getTime();
                    if (one < two) {
                        return 1;
                    } else {
                        return -1;
                    }
                  });
              }
        }
        if (filter.filterBy && filter.input) {
            const input = filter.input.toLocaleLowerCase();
            arr = arr.filter(item => {
                console.log(item, filter.filterBy);
                return item[filter.filterBy].toLocaleLowerCase().indexOf(input) !== -1;
            } );
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return arr;
    }
}