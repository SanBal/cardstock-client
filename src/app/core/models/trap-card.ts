import {AbstractCard} from "./abstract-card";

export class TrapCard extends AbstractCard {
  type: string;

  constructor(name?: string, rarity?: string, type?: string) {
    super(name, rarity);
    this.type = type;
  }

  public toString() {
    return `TrapCard: (name: ${this.name}, type: ${this.type}, rarity: ${this.rarity}`;
  }

  protected setResourceType() {
    this.resourcetype = "TrapCard"
  }
}
