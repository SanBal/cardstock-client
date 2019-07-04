import { Injectable } from '@angular/core';
import {AbstractCard} from "../models/abstract-card";
import {MonsterCard} from "../models/monster-card";
import {HttpClient} from "@angular/common/http";
import {SpellCard} from "../models/spell-card";
import {TrapCard} from "../models/trap-card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private static readonly URL_CARDSTOCK_SERVER = "http://127.0.0.1:8000/cards/";
  constructor(private http: HttpClient) { }

  addCard(card: AbstractCard) {
    this.http.post(CardService.URL_CARDSTOCK_SERVER, card)
      .subscribe(res => {
        // TODO show notification for success and error
        console.log(res)
      });
  }
}
