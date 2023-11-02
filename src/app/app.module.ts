import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoPrincipalComponent } from './component/contenido-principal/contenido-principal.component';
import { ContenidoSecundarioComponent } from './component/contenido-secundario/contenido-secundario.component';
import { ChildrenComponent } from './component/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoPrincipalComponent,
    ContenidoSecundarioComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
