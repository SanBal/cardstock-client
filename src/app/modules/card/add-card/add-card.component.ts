import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  addCardForm: FormGroup;

  // Options for 'type' and 'rarity' dropdown menus
  types = ["Monster", "Spell", "Trap"];
  rarities = ["Common", "Rare", "Super Rare", "Starfoil", "Super Rare", "Ultra Rare", "Secret Rare"];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialize form with validators
    this.addCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: [this.types[0], Validators.required],
      rarity: [this.rarities[0], Validators.required]
    })
  }

  onSubmit(){
    console.log("TODO submit");
    console.log(this.addCardForm)
  }
}
