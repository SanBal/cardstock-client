import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../../../core/services/card.service";
import {MonsterCard} from "../../../../core/models/monster-card";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {DecimalPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Card} from "../../../../core/models/card";

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss'],
  providers: [DecimalPipe]
})
export class CardsTableComponent implements OnInit {
  @Input() title: string;
  @Input() colNames = [];

  cards: Card[] = [];
  filteredCards: Card[];

  // Pagination variables
  page = 1;
  pageSize = 4;

  searchFormControl = new FormControl('');

  constructor(private cardService: CardService, private numberPipe: DecimalPipe) {
  }

  ngOnInit() {
    this.cardService.getTypeCards(this.getCardClassForTitle(), this.getCardTypeForTitle())
      .subscribe((cards: Card[]) => {
        // Initially fetch cards of the corresponding type from the service
        this.cards = cards;

        this.getFilteredCards().subscribe(filteredCards => {
          this.filteredCards = filteredCards;
        });
      });
  }

  private getFilteredCards(): Observable<Card[]> {
    // Each time search term of input field changes, filter cards
    // Use pipe function in order to set initial search term value and execute the general filtering.
    return this.searchFormControl.valueChanges.pipe(
      // Initial search term value is empty string
      // in order to display initially all cards in table
      startWith(''),
      map(searchText => this.filterCards(searchText))
    )
  }

  private filterCards(searchTerm: string): Card[] {
    return this.cards.filter(card => {
      let hasNumberPropSearchTerm = false;
      if (card instanceof MonsterCard) {
        // TODO add check for atk and def considering decimal pipe for four-digit values
        hasNumberPropSearchTerm = this.numberPipe.transform(card.level).includes(searchTerm);
      }
      return hasNumberPropSearchTerm || card.name.toLowerCase().includes(searchTerm.toLowerCase())
        || card.type.toLowerCase().includes(searchTerm.toLowerCase())
        || card.rarity.toLowerCase().includes(searchTerm.toLowerCase());
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
