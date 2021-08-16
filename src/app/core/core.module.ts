import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MatInputModule} from '@angular/material/input'; 
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ]
})
export class CoreModule { }
