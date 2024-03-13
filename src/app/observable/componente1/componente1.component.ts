import { Component } from '@angular/core';
import { ServicoService } from '../servico.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss'
})
export class Componente1Component {
  valor:string = '';
  constructor(private srv: ServicoService) { }

  enviar() {
    this.srv.changeValue(this.valor);
    this.valor = '';
  }
}
