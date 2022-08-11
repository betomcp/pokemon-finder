import { PokemonServiceService } from './../../services/pokemon-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-name-input-c',
  templateUrl: './name-input-c.component.html',
  styleUrls: ['./name-input-c.component.scss']
})
export class NameInputCComponent implements OnInit {

  @Output() public sendData = new EventEmitter();
  public name = "";

  constructor(private pokemonServiceService: PokemonServiceService) { }

  ngOnInit() {
  }

  public getPokemon(name: string){
    console.log(name)
    this.pokemonServiceService.getPokeImg(name).subscribe(
      res => {
        console.log(res)
        this.sendData.emit(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`)
      },
      error => console.log(error)
    )
  }

}
