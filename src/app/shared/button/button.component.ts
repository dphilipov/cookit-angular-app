import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() btnClass!: string;
  @Input() btnType!: string;
  @Input() btnColor?: string;
  @Input() btnText!: string;

  constructor() { 

  }

}
