import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

    transform(records: Array<any>, arg?: any, direction?: any): any {
        return records.sort((a, b) => {
            if (a[arg] < b[arg]) {
                return -1 * direction;
            }
            else if (a[arg] > b[arg]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
}