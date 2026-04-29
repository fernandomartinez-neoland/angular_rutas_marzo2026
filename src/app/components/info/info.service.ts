import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  pokeAPI = "https://pokeapi.co/api/v2/pokemon/ditto"

  async getPokemon() {
    const response = await axios.get(this.pokeAPI);
    return response.data;
  }
}
