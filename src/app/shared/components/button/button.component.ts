import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() {}
  @Input()
  text = '';
  ngOnInit(): void {}
  @Input()
  active: boolean = false;
  @Input()
  buttonblue: boolean = false;
  @Input()
  buttonwhite: boolean=false;
  @Input()
  type?: 'submit' | 'reset' | 'button' = 'button';
  @Input()
  disabled: boolean | null = false;
  @Input()
  fullwidth: boolean=false;
  @Input()
  buttonadd: boolean=false;
}
