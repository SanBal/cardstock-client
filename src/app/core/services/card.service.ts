import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private static readonly URL_CARDSTOCK_SERVER = "http://127.0.0.1:8000/cards/";

  constructor(private http: HttpClient) {
  }

  addCard(card: Card): Observable<any> {
    return this.http.post(CardService.URL_CARDSTOCK_SERVER, card)
  }

  getTypeCards<T extends Card>(type: new () => T, cardType: "monster" | "spell" | "trap"): Observable<T[]> {
    return this.http.get(`${CardService.URL_CARDSTOCK_SERVER}${cardType}`)
      .pipe(
        // Map response card items to objects of type 'T'
        map((response: any) => {
          // Get properties keys of first card item
          const cardKeys = Object.keys(response[0]);
          let cards = [];
          for (let i = 0; i < response.length; i++) {
            // Create new card instance of type 'T'
            let card = new type();
            // Use each property key to get value of current response card item
            // Set value to corresponding property of new card instance
            cardKeys.forEach(key => {
              card[key] = response[i][key];
            });
            cards.push(card)
          }
          return cards;
        })
      );
  }
}
