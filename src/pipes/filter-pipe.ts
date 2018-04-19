import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase()
        return items.filter(item => {
            // let result = item.replace(/ +/g, "");
            if (typeof (item) == 'object') {
                return item['name'].toString().toLowerCase().includes(searchText);
            } else if (typeof (item) == 'string')
                return item.toString().toLowerCase().includes(searchText);
        });
    }
}