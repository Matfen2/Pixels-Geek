import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUniversComponent } from './components/show-univers/show-univers.component';
import { WhyComponent } from './components/why/why.component';
import { NewsComponent } from './components/news/news.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SagasModalsFirstComponent } from './components/sagas-modals-first/sagas-modals-first.component';
import { SagasModalsSecondComponent } from './components/sagas-modals-second/sagas-modals-second.component';
import { SagasModalsThirdComponent } from './components/sagas-modals-third/sagas-modals-third.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUniversComponent,
    WhyComponent,
    NewsComponent,
    ArticlesComponent,
    SagasModalsFirstComponent,
    SagasModalsSecondComponent,
    SagasModalsThirdComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
