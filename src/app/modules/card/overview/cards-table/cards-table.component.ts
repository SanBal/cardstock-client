import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../../../core/services/card.service";
import {MonsterCard} from "../../../../core/models/monster-card";
import {AbstractCard} from "../../../../core/models/abstract-card";
import {SpellCard} from "../../../../core/models/spell-card";

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss']
})
export class CardsTableComponent implements OnInit {
  @Input() title: string;
  @Input() colNames = [];

  cards: AbstractCard[] = [];

  // Pagination variables
  page = 1;
  pageSize = 4;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getTypeCards(this.getCardClassForTitle())
      .subscribe((cards: AbstractCard[]) => {
        this.cards = cards;
        console.log(Object.keys(this.cards[0]))
      });
  }

  private getCardClassForTitle() {
    let cardClass: any = MonsterCard;
    if (this.title.toLowerCase().includes("spell")) {
      cardClass = SpellCard;
    } else if (this.title.toLowerCase().includes("trap")) {
      cardClass = SpellCard;
    }
    return cardClass;
  }
}
