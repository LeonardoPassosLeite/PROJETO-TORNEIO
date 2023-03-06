import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compromisso } from 'src/app/models/Compromisso';
import { CompromissoService } from 'src/app/services/Compromisso.service';
import type { DateTimeFormatOptions } from 'intl';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-compromisso-semana',
  templateUrl: './compromisso-semana.component.html',
  styleUrls: ['./compromisso-semana.component.scss']
})
export class CompromissoSemanaComponent {
  public diasMes: { data: Date, compromissos: Compromisso[], mes?: string, diaSemana: string }[] = [];
  public diasSemana: { data: Date; compromissos: Compromisso[]; mes?: string | undefined; diaSemana: string }[] = [];

  constructor(private compromissoService: CompromissoService, private router: Router) { }

  ngOnInit(): void {
    this.getDiasMes();
    this.getDiasSemana();
  }


  private getDiasMes() {
    const hoje = new Date();
    const diasMes: { data: Date; compromissos: Compromisso[]; diaSemana: string; }[] = [];
    const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const ultimoDia = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
    const datas = Array.from({ length: ultimoDia.getDate() }, (_, i) => new Date(primeiroDia.getFullYear(), primeiroDia.getMonth(), i + 1));
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    diasMes.splice(0, diasMes.length); // Limpa o array diasMes

    datas.sort((a, b) => a.getTime() - b.getTime());

    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      const diaSemana = diasSemana[data.getDay()];
      const compromissosDia = this.getCompromissosDia(data);
      compromissosDia.subscribe(compromissos => {
        diasMes.push({ data, compromissos, diaSemana });

        if (diasMes.length === datas.length) {
          this.diasMes = diasMes;
        }
      });
    }
  }

  private getDiasSemana() {
    const hoje = new Date();
    const diasSemana: { data: Date; compromissos: Compromisso[]; mes?: string | undefined; diaSemana: string }[] = [];
    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    for (let i = 0; i < 7; i++) {
      const data = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
      const compromissos: Compromisso[] = [];
      const dia = { data, compromissos, mes: data.toLocaleDateString('pt-BR', options), diaSemana: diaSemana[data.getDay()] };
      diasSemana.push(dia);

      // Recupera os compromissos do dia usando o método getCompromissosDia e atualiza a lista de compromissos do dia correspondente
      this.getCompromissosDia(data).subscribe(compromissos => {
        dia.compromissos = compromissos;
      });

      if (diasSemana.length === 7) {
        this.diasSemana = diasSemana;
      }
    }
  }

  private getCompromissosDia(data: Date): Observable<Compromisso[]> {
    const dataString = data.toISOString().split('T')[0];
    return this.compromissoService.getCompromissos(dataString).pipe(
      map(compromissos => {
        return compromissos.filter(compromisso => {
          const compromissoData = (compromisso.data instanceof Date) ? compromisso.data : new Date(compromisso.data);
          return compromissoData.toISOString().split('T')[0] === dataString;
        });
      })
    );
  }

  goToCompromissoHoje() {
    this.router.navigate(['/']);
  }
}