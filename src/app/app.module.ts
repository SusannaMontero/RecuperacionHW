import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SobrehealthworldComponent } from './components/sobrehealthworld/sobrehealthworld.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { EsheaderComponent } from './components/esheader/esheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { EsloginComponent } from './components/eslogin/eslogin.component';
import { InindexComponent } from './components/inindex/inindex.component';
import { AbouthealthworldComponent } from './components/abouthealthworld/abouthealthworld.component';
import { ContactComponent } from './components/contact/contact.component';
import { InheaderComponent } from './components/inheader/inheader.component';
import { InloginComponent } from './components/inlogin/inlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SobrehealthworldComponent,
    ContactarComponent,
    EsheaderComponent,
    FooterComponent,
    EsloginComponent,
    InindexComponent,
    AbouthealthworldComponent,
    ContactComponent,
    InheaderComponent,
    InloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
