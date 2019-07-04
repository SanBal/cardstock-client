import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  addCardForm: FormGroup;

  // Flags to show/hide corresponding card type infos
  showMonsterInfos = true;
  showSpellInfos = false;
  showTrapInfos: boolean;

  // Options for dropdown menus
  cardTypes = ["Monster", "Spell", "Trap"];
  spellTypes = ["Ausrüstung", "Normal", "Permanent", "Ritual", "Schnell", "Spielfeld"];
  trapTypes = ["Konter", ...this.spellTypes.slice(1, 3)];
  rarities = ["Common", "Rare", "Super Rare", "Starfoil", "Super Rare", "Ultra Rare", "Secret Rare"];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // Initialize form with form controls containing initial values and  validators
    this.addCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardType: [this.cardTypes[0], Validators.required],
      rarity: [this.rarities[0], Validators.required],
      spellType: [this.spellTypes[0], Validators.required],
      trapType: [this.trapTypes[0], Validators.required],
    })
  }

  onSubmit(){
    console.log("TODO submit");
    console.log(this.addCardForm)
  }

  onCardTypeChange(event: Event) {
    const cardType = (event.target as HTMLSelectElement).value;
    if (cardType === "Monster") {
      this.showMonsterInfos = true;
      this.showSpellInfos = false;
      this.showTrapInfos = false;
    } else if (cardType === "Spell") {
      this.showSpellInfos = true;
      this.showMonsterInfos = false;
      this.showTrapInfos = false;
    }else if (cardType === "Trap") {
      this.showTrapInfos = true;
      this.showMonsterInfos = false;
      this.showSpellInfos = false;
    }
  }
}
