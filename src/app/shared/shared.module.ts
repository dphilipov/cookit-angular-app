import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IngredientsInputComponent } from './ingredients-input/ingredients-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import {MatTooltipModule} from '@angular/material/tooltip'; 

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    IngredientsInputComponent,
    SearchBarComponent,
    DropzoneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgxDropzoneModule,
    MatTooltipModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    IngredientsInputComponent,
    SearchBarComponent,
    DropzoneComponent,
    MatTooltipModule
  ]
})
export class SharedModule { }
