import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any, medicalSearch?: string[], locSearch?: string[], langSearch?: string[], genderSearch?: string[]) {
        if (items) {
            return items.filter(item => {
                for (let i in medicalSearch) {
                    if (medicalSearch && medicalSearch[i] && item.name && item.name.toLowerCase().indexOf(medicalSearch[i].toLowerCase()) === -1) {
                        return false;
                    }
                }
                for (let i in locSearch) {
                    if (locSearch && locSearch[i] && item.locations && item.locations.landmark && item.locations.landmark.toLowerCase().indexOf(locSearch[i].toLowerCase()) === -1) {
                        return false;
                    }
                }
                for (let i in langSearch) {
                    if (langSearch && langSearch[i] && item.language && item.language.toLowerCase().indexOf(langSearch[i].toLowerCase()) === -1) {
                        return false;
                    }
                }
                // if (genderSearch && item.company.toLowerCase().indexOf(genderSearch.toLowerCase()) === -1) {
                //     return false;
                // }
                return true;
            })
        }
        else {
            return items;
        }
    }
}