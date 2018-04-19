import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any, medicalSearch?: string[], locSearch?: string[], langSearch?: string[], genderSearch?: string[]) {
        if (items && (medicalSearch || locSearch || langSearch || genderSearch) && (medicalSearch.length>0 || locSearch.length>0 || langSearch.length>0 || genderSearch.length>0)) {
            return items.filter(item => {
                var medical = true,
                loc = true,
                lang = true,
                gender = true;

                if (medicalSearch && medicalSearch.length >0) {
                    medical = medicalSearch.some(medical => medical == item.name);
                    //return medical;
                }
                if (locSearch && locSearch.length >0) {
                    loc = locSearch.some(loc => loc == item.data[0].locations.landmark);
                    //return loc;
                }
                if (langSearch && langSearch.length >0) {
                    lang = langSearch.some(lang => lang == item.data[0].language);
                    //return lang;
                }
                if (genderSearch && genderSearch.length >0) {
                    gender = genderSearch.some(gender => gender == item.data[0].gender);
                    //return gender;
                }debugger;
                let filterObj = {
                    medical: medical,
                    loc: loc,
                    lang: lang,
                    gender: gender
                };
                let includeRecord = true;;
                let filterkeys = Object.keys(filterObj);
                 for(var i=0;i<filterkeys.length;i++){
                    if(filterObj[filterkeys[i]] == false) {
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