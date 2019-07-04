export abstract class AbstractCard{
  id: number;
  readonly name: string;
  readonly rarity: string;

  // Needed for server to determine the right card model class
  protected resourcetype: string;

  protected constructor(name: string, rarity: string) {
    this.name = name;
    this.rarity = rarity;
    this.setResourceType()
  }

  protected abstract setResourceType()
}
