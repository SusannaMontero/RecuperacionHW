import { EditarPerfilComponent } from './components/esp/esperfilus/editar-perfil/editar-perfil.component';
import { EsperfilusComponent } from './components/esp/esperfilus/esperfilus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/esp/index/index.component';
import { SobrehealthworldComponent } from './components/esp/sobrehealthworld/sobrehealthworld.component';
import { ContactarComponent } from './components/esp/contactar/contactar.component';
import { EsheaderComponent } from './components/esp/esheader/esheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { EsloginComponent } from './components/esp/eslogin/eslogin.component';
import { InindexComponent } from './components/eng/inindex/inindex.component';
import { InheaderComponent } from './components/eng/inheader/inheader.component';
import { AbouthealthworldComponent } from './components/eng/abouthealthworld/abouthealthworld.component';
import { ContactComponent } from './components/eng/contact/contact.component';
import { InloginComponent } from './components/eng/inlogin/inlogin.component';
import { EsinformacionComponent } from './components/esp/esinformacion/esinformacion.component';
import { EsbuscarmedicamentosComponent } from './components/esp/esbuscarmedicamentos/esbuscarmedicamentos.component';
import { EsheaderusComponent } from './components/esp/esheaderus/esheaderus.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'index'},
{ path: 'index', component: IndexComponent},
{ path: 'contactar', component: ContactarComponent},
{ path: 'esheader', component: EsheaderComponent},
{ path: 'sobrehealthworld', component: SobrehealthworldComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'eslogin', component: EsloginComponent},
{ path: 'inindex', component: InindexComponent},
{ path: 'inheader', component: InheaderComponent},
{ path: 'abouthealthworld', component: AbouthealthworldComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'inlogin', component: InloginComponent},
{ path: 'esperfilus', component: EsperfilusComponent},
{ path: 'editarPerfil', component: EditarPerfilComponent},
{ path: 'esinformacion', component: EsinformacionComponent},
{ path: 'esbuscarmedicamentos', component: EsbuscarmedicamentosComponent},
{ path: 'esheaderus', component: EsheaderusComponent},
{ path: '**', redirectTo: 'index'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
