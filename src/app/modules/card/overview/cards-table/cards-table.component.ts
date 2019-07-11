import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../../../core/services/card.service";
import {MonsterCard} from "../../../../core/models/monster-card";
import {Card} from "../../../../core/models/card";

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss']
})
export class CardsTableComponent implements OnInit {
  @Input() title: string;
  @Input() colNames = [];

  cards: Card[] = [];

  // Pagination variables
  page = 1;
  pageSize = 4;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getTypeCards(this.getCardClassForTitle(), this.getCardTypeForTitle())
      .subscribe((cards: Card[]) => {
        this.cards = cards;
      });
  }

  private getCardClassForTitle(): any {
    return this.title.toLowerCase().includes("monster") ? MonsterCard : Card;
  }

  private getCardTypeForTitle(): "monster" | "spell" | "trap" {
    return this.title.toLowerCase().includes("monster") ? "monster" :
      this.title.toLowerCase().includes("spell") ? "spell" : "trap";
  }
}
