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
import { DetailsComponent } from './details/details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UpdateComponent } from './update/update.component';
import { MatIconModule } from '@angular/material/icon';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ProfileComponent } from './profile/profile.component';

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
    UpdateComponent,
    ErrorMessageComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent
  ]
})
export class CoreModule { }
