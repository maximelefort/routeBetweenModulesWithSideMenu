import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'b',  loadChildren: './b/b.module#BPageModule' },
  { path: 'a',  loadChildren: './a/a.module#APageModule' },
  { path: '',   redirectTo:   'a', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
