import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-project';

  public imgUrl: string;

  public setUrl(event: any){
    this.imgUrl = event;
  }
}
