import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {ProfilComponent} from "./profil/profil.component";

const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    { path: 'register',
      component: RegisterComponent
    },
    { path: 'profil',
      component: ProfilComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
