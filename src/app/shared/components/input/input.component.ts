import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input()
  label = '';
  @Input()
  placeholder = '';
  _value = '';

  get value() {
    return this._value;
  }

  @Input()
  set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  onInput(e: any) {
    this.value = e.target.value;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
