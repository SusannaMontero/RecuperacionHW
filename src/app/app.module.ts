import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/esp/index/index.component';
import { SobrehealthworldComponent } from './components/esp/sobrehealthworld/sobrehealthworld.component';
import { ContactarComponent } from './components/esp/contactar/contactar.component';
import { EsheaderComponent } from './components/esp/esheader/esheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { EsloginComponent } from './components/esp/eslogin/eslogin.component';
import { InindexComponent } from './components/eng/inindex/inindex.component';
import { AbouthealthworldComponent } from './components/eng/abouthealthworld/abouthealthworld.component';
import { ContactComponent } from './components/eng/contact/contact.component';
import { InheaderComponent } from './components/eng/inheader/inheader.component';
import { EsperfilusComponent } from './components/esp/esperfilus/esperfilus.component';
import { InperfilusComponent } from './components/eng/inperfilus/inperfilus.component';
import { ESPComponent } from './components/esp/esp.component';
import { ENGComponent } from './components/eng/eng.component';
import { EditarPerfilComponent } from './components/esp/esperfilus/editar-perfil/editar-perfil.component';






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
    EsperfilusComponent,
    InperfilusComponent,
    ESPComponent,
    ENGComponent,
    EditarPerfilComponent,
    
    
    
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  // SweetAlert2Module,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
