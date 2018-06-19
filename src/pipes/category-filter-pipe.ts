import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any, medicalSearch?: string[], locSearch?: string[], langSearch?: string, genderSearch?: string) {
        if (items && (medicalSearch || locSearch || langSearch || genderSearch) && ( genderSearch || langSearch || (medicalSearch && medicalSearch.length > 0) || (locSearch && locSearch.length > 0) )) {
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
                if (langSearch && item.languages) {
                    let langArr = [];
                    for (let i in item.languages) {
                        langArr.push(item.languages[i].name);
                    }
                    for (let i in langArr) {
                        lang =  langSearch.toLowerCase() == langArr[i].toLowerCase();
                    }
                }
                if (genderSearch && item.user && item.user.gender) {
                    gender =  genderSearch.toLowerCase() == item.user.gender.toLowerCase();
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