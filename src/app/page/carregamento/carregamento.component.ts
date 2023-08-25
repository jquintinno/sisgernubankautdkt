import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.component.html',
  styleUrls: ['./carregamento.component.scss']
})
export class CarregamentoComponent implements OnInit {

  public taxaProgresso: number = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.taxaProgresso += 4;
      if (this.taxaProgresso >= 100) {
        clearInterval(interval);
      }
      if (this.taxaProgresso >= 100) {
        this.taxaProgresso = 100;
      }
    }, 90);
    this.redirecionarPageAutenticacao();
  }

  public redirecionarPageAutenticacao() {
    setTimeout(() => {
      this.router.navigate(['/autenticacao']);
    }, 2600);
  }

}
