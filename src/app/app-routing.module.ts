import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from './page/autenticacao/autenticacao.component';
import { CarregamentoComponent } from './page/carregamento/carregamento.component';

const routes: Routes = [
  { path: "", redirectTo: "carregamento", pathMatch: "full" },
  { path: "carregamento", component: CarregamentoComponent },
  { path: "autenticacao", component: AutenticacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
