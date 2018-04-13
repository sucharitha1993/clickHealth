import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase().replace(/ +/g, "");
        return items.filter(item => {
            let result = item.replace(/ +/g, "");
            return result.toString().toLowerCase().includes(searchText);
        });
    }
}