import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'toINRCurrency' })
export class ToINRCurrencyFormat implements PipeTransform {
    transform(value): any {
        if (value == undefined || value == "NaN" || value == '') {
            return null;
        }
        let lastThree, otherNumbers;
        value = value.toString().replace(/,/g, "");
        value = parseFloat(value).toFixed(2);
        let result = value.toString().split('.');
        //let currencySymbol = '₹';
        value = value.toString().replace(/,/g, "");

        lastThree = result[0].substring(result[0].length - 3);
        otherNumbers = result[0].substring(0, result[0].length - 3);

        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        let output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

        if (result.length > 1) {
            output += "." + result[1];
        } else {
            output += ".00";
        }
        return output;
    }
}