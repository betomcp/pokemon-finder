import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  public pokeUrl: any

  constructor(private http: HttpClient) { }

  private httpOptions = {  //headers customizados
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3'
    })
  }

//   public getPokeImg(pokeName: string): Observable<any> {
//     return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
//       .pipe(
//         res => {
//           console.log(res)
//           return res
//         },
//         error => error

//       )
//   }
// }

public getPokeImg(pokeName: string): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/${pokeName}`, this.httpOptions)
    .pipe(
      res => {
        console.log(res)
        return res
      },
      error => error

    )
  }
}
