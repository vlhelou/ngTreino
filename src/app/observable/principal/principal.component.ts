import { Component } from '@angular/core';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente2Component } from '../componente2/componente2.component';



@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ Componente2Component, Componente1Component],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
