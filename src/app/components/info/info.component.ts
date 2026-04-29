import { Component, signal } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  constructor(private infoService: InfoService) { }
  ditto = signal('');
  ngOnInit() {
    setTimeout(() => {
      this.infoService.getPokemon().then((pokemon) => {
        this.ditto.set(pokemon.sprites.other["official-artwork"].front_default)
      });
    }, 5000);
  }
}

