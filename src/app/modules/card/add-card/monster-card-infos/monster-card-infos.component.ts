import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-monster-card-infos',
  templateUrl: './monster-card-infos.component.html',
  styleUrls: ['./monster-card-infos.component.scss']
})
export class MonsterCardInfosComponent implements OnInit {
  @Input() addCardForm: FormGroup;

  monsterTypes = ["Aqua", "Dinosaurier", "Donner", "Drache", "Fee", "Fels", "Fisch", "Göttliches Ungeheuer",
    "Geflügeltes Ungeheuer", "Hexer", "Insekt", "Krieger", "Maschine", "Pflanze"];

  constructor() {
  }

  ngOnInit() {
    // Add further form controls for monster card specific properties
    this.addCardForm.addControl("monsterType", new FormControl(this.monsterTypes[0], Validators.required));
    ["level", "atk", "def"].forEach(controlName => {
      this.addCardForm.addControl(controlName, new FormControl(0, Validators.required));
    })
  }

}
