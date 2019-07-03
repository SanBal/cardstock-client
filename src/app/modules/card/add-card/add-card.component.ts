import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  addCardForm: FormGroup;

  // Options for 'card-type', and 'rarity' dropdown menus
  cardTypes = ["Monster", "Spell", "Trap"];
  rarities = ["Common", "Rare", "Super Rare", "Starfoil", "Super Rare", "Ultra Rare", "Secret Rare"];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialize form with form controls containing initial values and  validators
    this.addCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardType: [this.cardTypes[0], Validators.required],
      rarity: [this.rarities[0], Validators.required]
    })
  }

  onSubmit(){
    console.log("TODO submit");
    console.log(this.addCardForm)
  }
}
