import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import { CardComponent } from './card/card.component'; 

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ]
})
export class SharedModule { }
