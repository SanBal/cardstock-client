import {Injectable} from '@angular/core';
import {AbstractCard} from "../models/abstract-card";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private static readonly URL_CARDSTOCK_SERVER = "http://127.0.0.1:8000/cards/";
  constructor(private http: HttpClient) { }

  addCard(card: AbstractCard): Observable<any> {
    return this.http.post(CardService.URL_CARDSTOCK_SERVER, card)
  }
}
