import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupEditComponent } from "./components/sup-edit/sup-edit.component";
import { SupListComponent } from "./components/sup-list/sup-list.component";
import { FightComponent } from "./components/fight/fight.component";

const routes: Routes = [
  { path: 'details/:id', component: SupEditComponent },
  { path: 'list', component: SupListComponent },
  { path: 'fight', component: FightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
