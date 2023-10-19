import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupListComponent } from "./components/sup-list/sup-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SupEditComponent } from './components/sup-edit/sup-edit.component';
import { DeadPipe } from './pipes/dead.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FightComponent } from './components/fight/fight.component';
import { SuperhumanComponent } from './components/superhuman/superhuman.component'

@NgModule({
  declarations: [
    AppComponent,
    SupListComponent,
    SupEditComponent,
    DeadPipe,
    FightComponent,
    SuperhumanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
