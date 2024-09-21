import { Routes } from '@angular/router';

export const routes: Routes = [


    {path: '', redirectTo: 'home', pathMatch:'full'},
    {
        path:'home',
        title:'Accueil',
        loadComponent: () => import('./Components/home/home.component').then(module => module.HomeComponent),
        
    },
    // {path: 'home', redirectTo: 'login', pathMatch:'full'},
    // {
    //     path:'login',
    //     title : 'Page de connexion',
    //     loadComponent: () => import('./components/authentification_component/login/login.component').then(module => module.LoginComponent)
    // },

    {
        path: '**',
        title:'Page introuvable',
        loadComponent: () => import('./Components/static/page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
    },
];
