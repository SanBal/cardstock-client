import {Card, CardType} from "./card";

export class MonsterCard extends Card {
  readonly type: string;
  readonly level: number;
  readonly atk: number;
  readonly defense: number;

  constructor(name: string, type: string, rarity: string, level: number, atk: number, def: number) {
    super(name, CardType.MonsterCard, type, rarity);
    this.level = level;
    this.atk = atk;
    this.defense = def;
  }

  public toString() {
    return `MonsterCard: (name: ${this.name}, resourcetype: ${this.resourcetype}, type: ${this.type}, rarity: ${this.rarity}, level: ${this.level}, atk: ${this.atk}, def: ${this.defense})`;
  }
}
