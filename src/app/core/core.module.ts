import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatInputModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ]
})
export class CoreModule { }
