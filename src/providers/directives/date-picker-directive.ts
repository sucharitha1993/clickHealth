import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[datepicker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,useExisting: 
    forwardRef(() => DatePickerDirective),
    multi: true
  }]
})
export class DatePickerDirective implements ControlValueAccessor {  
    value: string;

    constructor(protected el: ElementRef) {}

    ngAfterViewInit(){
      $(this.el.nativeElement).datepicker({
        changeMonth: true,
        //minDate: new Date(),
        changeYear: true
      }).on('change', e => this.onModelChange(e.target.value));
    } 

    onModelChange: Function = () => {};
    
    onModelTouched: Function = () => {};

    writeValue(val: string) : void {
        this.value = val;
    }
    
    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }
}