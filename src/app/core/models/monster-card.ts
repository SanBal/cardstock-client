import {AbstractCard} from "./abstract-card";

export class MonsterCard extends AbstractCard {
  type: string;
  level: number;
  atk: number;
  defense: number;

  constructor(name?: string, rarity?: string, type?: string, level?: number, atk?: number, def?: number) {
    super(name, rarity);
    this.type = type;
    this.level = level;
    this.atk = atk;
    this.defense = def;
  }

  public toString() {
    return `MonsterCard: (name: ${this.name}, type: ${this.type}, rarity: ${this.rarity}, level: ${this.level}, atk: ${this.atk}, def: ${this.defense})`;
  }

  protected setResourceType() {
    this.resourcetype = "MonsterCard"
  }
}
