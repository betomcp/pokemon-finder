import { PokemonServiceService } from './../../services/pokemon-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-img-c',
  templateUrl: './pokemon-img-c.component.html',
  styleUrls: ['./pokemon-img-c.component.scss']
})
export class PokemonImgCComponent implements OnInit {

  @Input() public imgUrl: string = "";

  constructor() { }

  ngOnInit() {
  }


  // public getPokeImg(pokeName: string){
  //   this.pokemonServiceService.getPokeImg(pokeName).subscribe(
  //     res => {
  //       console.log(res)
  //       this.imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${res.id}.png`
  //     },
  //     error => console.log(error)
  //   )
  // }

}
