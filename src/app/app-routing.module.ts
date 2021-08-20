import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './core/create/create.component';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { RegisterComponent } from './core/register/register.component';

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
        path: 'create',
        component: CreateComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);