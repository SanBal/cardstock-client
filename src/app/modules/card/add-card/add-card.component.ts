import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "../../../core/services/card.service";
import {AbstractCard} from "../../../core/models/abstract-card";
import {MonsterCard} from "../../../core/models/monster-card";
import {SpellCard} from "../../../core/models/spell-card";
import {TrapCard} from "../../../core/models/trap-card";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  private subjectAlert = new Subject<string>();

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

  alertType = "success";
  alertMessage = "";

  constructor(private formBuilder: FormBuilder, private cardService: CardService) {
  }

  ngOnInit() {
    // Initialize form with form controls containing initial values and  validators
    this.addCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardType: [this.cardTypes[0], Validators.required],
      rarity: [this.rarities[0], Validators.required],
      spellType: [this.spellTypes[0], Validators.required],
      trapType: [this.trapTypes[0], Validators.required],
    });

    // When new message is emitted set is as alert message
    this.subjectAlert.subscribe(message => this.alertMessage = message);

    // After five seconds dismiss alert
    this.subjectAlert.pipe(debounceTime(5000))
      .subscribe(() => this.alertMessage = null);
  }

  onSubmit() {
    let card: AbstractCard;
    const value = this.addCardForm.value;
    switch (value.cardType) {
      case "Monster":
        card = new MonsterCard(value.name, value.rarity, value.monsterType, value.level, value.atk, value.def);
        break;
      case "Spell":
        card = new SpellCard(value.name, value.rarity, value.spellType);
        break;
      case "Trap":
        card = new TrapCard(value.name, value.rarity, value.trapType);
        break;
    }

    this.cardService.addCard(card)
      .subscribe(response => {
        this.displayAlert(201, `Card has been created with id <strong>${response.id}</strong>!`);
      }, error => {
        this.displayAlert(error.status, error.message);
      })
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
    } else if (cardType === "Trap") {
      this.showTrapInfos = true;
      this.showMonsterInfos = false;
      this.showSpellInfos = false;
    }
  }

  private displayAlert(status, message) {
    this.alertType = status === 201 ? "success" : "danger";
    this.subjectAlert.next(message);
  }
}
