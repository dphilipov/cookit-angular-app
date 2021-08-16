import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    ButtonComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    ButtonComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
