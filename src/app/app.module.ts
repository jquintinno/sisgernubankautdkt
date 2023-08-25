import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './page/autenticacao/autenticacao.component';
import { CarregamentoComponent } from './page/carregamento/carregamento.component';
import { ProgressoComponent } from './component/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    CarregamentoComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
