import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any, medicalSearch?: string[], locSearch?: string[], langSearch?: string[], genderSearch?: string[]) {
        if (items) {
            return items.filter(item => {
                if (medicalSearch) {
                    let medical = medicalSearch.some(medical => medical == item.name);
                    return medical;
                }
                if (locSearch) {
                    let loc = locSearch.some(loc => loc == item.data[0].locations.landmark);
                    return loc;
                }
                if (langSearch) {
                    let lang = langSearch.some(lang => lang == item.data[0].language);
                    return lang;
                }
                if (genderSearch) {
                    let gender = genderSearch.some(gender => gender == item.data[0].gender);
                    return gender;
                }
                return true;
            })
        }
        else {
            return items;
        }
    }
}