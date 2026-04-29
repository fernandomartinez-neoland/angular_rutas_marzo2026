import { Component, signal } from '@angular/core';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private infoService: InfoService) { }
  ditto = signal('');
  ngOnInit() {
    this.infoService.getPokemon().then((pokemon) => {
      this.ditto.set(pokemon.sprites.other["official-artwork"].front_default)
    });
  }
}
