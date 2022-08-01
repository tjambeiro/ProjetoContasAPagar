import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes =[]
@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
