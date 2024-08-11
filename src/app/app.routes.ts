import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

export const routes: Routes = [
    { path: 'inventory', component: InventoryListComponent },
    { path: '', redirectTo: '/inventory', pathMatch: 'full' },
]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
 
