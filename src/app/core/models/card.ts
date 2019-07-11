export enum CardType {
  MonsterCard = "MonsterCard",
  SpellCard = "SpellCard",
  TrapCard = "TrapCard"
}

export class Card {
  id: number;
  readonly name: string;

  // Needed for server to determine the right card model class
  readonly resourcetype: CardType;

  readonly type: string;
  readonly rarity: string;

  constructor(name: string, resourcetype: CardType, type: string, rarity: string) {
    this.name = name;
    this.resourcetype = resourcetype;
    this.type = type;
    this.rarity = rarity;
  }

  public toString() {
    return `Card: (name: ${this.name}, resourcetype: ${this.resourcetype}, type: ${this.type}, rarity: ${this.rarity}`;
  }
}
