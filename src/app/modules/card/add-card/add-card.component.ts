import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  types = ["Monster", "Spell", "Trap"];
  rarities = ["Common", "Rare", "Super Rare", "Starfoil", "Super Rare", "Ultra Rare", "Secret Rare"];

  constructor() { }

  ngOnInit() {
  }
}
