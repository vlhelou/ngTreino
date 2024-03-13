import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ServicoService } from '../servico.service'
@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.scss'
})
export class Componente2Component implements OnInit{
  lista: string[] = [];
  constructor(private srv: ServicoService) {  }

  ngOnInit(): void {
    this.lista=[];
    this.srv.currentValue.subscribe((value) => {
      if (value == '') return;
      this.lista.push(value);
      
    });
  }
}
