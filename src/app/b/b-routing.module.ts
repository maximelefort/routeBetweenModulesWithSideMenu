import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BPage } from './b.page';


const bRoutes: Routes = [
    {
        path: '',
        component: BPage,
        children: [
            { path: 'b1', loadChildren: './b1/b1.module#B1PageModule' },
            { path: 'b2', loadChildren: './b2/b2.module#B2PageModule' },
            { path: '', loadChildren: './b1/b1.module#B1PageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(bRoutes)],
    exports: [RouterModule]
})
export class BRoutingModule { }
