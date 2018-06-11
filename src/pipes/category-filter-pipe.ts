import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any, medicalSearch?: string[], locSearch?: string[], langSearch?: string[], genderSearch?: string[]) {
        if (items && (medicalSearch || locSearch || langSearch || genderSearch) && (medicalSearch.length > 0 || locSearch.length > 0 || langSearch.length > 0 || genderSearch.length > 0)) {
            return items.filter(item => {
                let medical = true,
                    loc = true,
                    lang = true,
                    gender = true;
                if (medicalSearch && medicalSearch.length > 0 && item.hospital && item.hospital[0]) {
                    medical = medicalSearch.some(medical => medical == item.hospital[0].name);
                }
                if (locSearch && locSearch.length > 0 && item.hospital && item.hospital[0] && item.hospital[0].location) {
                    loc = locSearch.some(loc => loc == item.hospital[0].location.name);
                }
                if (langSearch && langSearch.length > 0 && item.language) {
                    lang = langSearch.some(lang => lang.toLowerCase() == item.language.toLowerCase());
                }
                if (genderSearch && genderSearch.length > 0 && item.user && item.user.gender) {
                    gender = genderSearch.some(gender => gender.toLowerCase() == item.user.gender.toLowerCase());
                }
                let filterObj = {
                    medical: medical,
                    loc: loc,
                    lang: lang,
                    gender: gender
                };
                let includeRecord = true;
                let filterkeys = Object.keys(filterObj);
                for (var i = 0; i < filterkeys.length; i++) {
                    if (filterObj[filterkeys[i]] == false) {
                        includeRecord = false;
                        return;
                    }
                }
                return includeRecord;
            })
        }
        else {
            return items;
        }
    }
}