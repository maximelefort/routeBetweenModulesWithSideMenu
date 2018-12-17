import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APage } from './a.page';


const aRoutes: Routes = [
    {
        path: '',
        component: APage,
        children: [
            { path: 'a1', loadChildren: './a1/a1.module#A1PageModule' },
            { path: 'a2', loadChildren: './a2/a2.module#A2PageModule' },
            { path: '', redirectTo:   'a1', pathMatch: 'full'  }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(aRoutes)],
    exports: [RouterModule]
})
export class ARoutingModule { }
