import {AbstractCard} from "./abstract-card";

export class SpellCard extends AbstractCard {
  readonly type: string;

  constructor(name: string, rarity: string, type: string) {
    super(name, rarity);
    this.type = type;
  }

  public toString() {
    return `SpellCard: (name: ${this.name}, type: ${this.type}, rarity: ${this.rarity}`;
  }

  protected setResourceType() {
    this.resourcetype = "SpellCard"
  }
}
