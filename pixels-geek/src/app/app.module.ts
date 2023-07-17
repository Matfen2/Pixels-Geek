import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUniversComponent } from './components/show-univers/show-univers.component';
import { WhyComponent } from './components/why/why.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUniversComponent,
    WhyComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
