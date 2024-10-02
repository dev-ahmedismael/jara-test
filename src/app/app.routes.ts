import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/index/index.component').then((m) => m.IndexComponent),
        title: 'جرة'
    },
    {
        path: 'policies-and-terms',
        loadComponent: () => import('./components/policies-and-terms/policies-and-terms.component').then((m) => m.PoliciesAndTermsComponent),
        title: 'جرة - سياسة الخصوصية'
    },
    {
        path: 'terms-and-condetions',
        loadComponent: () => import('./components/terms-and-condetions/terms-and-condetions.component').then((m) => m.TermsAndCondetionsComponent),
        title: 'جرة - الشروط والاحكام'
    },
    {
        path: 'return-policy',
        loadComponent: () => import('./components/return-policy/return-policy.component').then((m) => m.ReturnPolicyComponent),
        title: 'جرة - سياسة الإسترجاع'
    },
    {
        path:'**',
        loadComponent: () => import('./components/error/error.component').then((m) => m.ErrorComponent),
        title: 'جرة - صفحة غير موجودة '
        
    }
];
