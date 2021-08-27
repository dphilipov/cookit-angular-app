import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './core/create/create.component';
import { DetailsComponent } from './core/details/details.component';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { ProfileComponent } from './core/profile/profile.component';
import { RegisterComponent } from './core/register/register.component';
import { UpdateComponent } from './core/update/update.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'recipes/:id',
        component: DetailsComponent 
    },
    {
        path: 'update/:id',
        component: UpdateComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);