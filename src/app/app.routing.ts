import { Routes, RouterModule, CanActivate } from '@angular/router'
import { ModuleWithProviders } from "@angular/core/src/metadata";

import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: '', component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);