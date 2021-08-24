import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DetailsComponent } from './details/details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    DetailsComponent,
    ShoppingListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    NgxDropzoneModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ]
})
export class CoreModule { }
