import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/Compromisso';
import { CompromissoService } from 'src/app/services/Compromisso.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-compromisso-insert',
  templateUrl: './compromisso-insert.component.html',
  styleUrls: ['./compromisso-insert.component.scss']
})
export class CompromissoInsertComponent implements OnInit {
  compromissoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.compromissoForm = this.formBuilder.group({
      titulo: [''],
      descricao: [''],
      data: ['']
    });
  }

  compromisso: any = {};

  criarCompromisso() {
    this.compromissoService.criarCompromisso(this.compromisso)
      .subscribe(
        (result) => {
          console.log('Compromisso criado com sucesso!', result);
          // limpa o formulário após criar o compromisso
          this.compromissoForm.reset();
        },
        (error) => {
          console.error('Erro ao criar compromisso', error);
        }
      );
  }
}