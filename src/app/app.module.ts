import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { ShowMoviesDirective } from './show-movies.directive';


@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
