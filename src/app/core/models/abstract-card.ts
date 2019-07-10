export abstract class AbstractCard{
  id: number;
  name: string;
  rarity: string;

  // Needed for server to determine the right card model class
  resourcetype: string;

  protected constructor(name?: string, rarity?: string) {
    this.name = name;
    this.rarity = rarity;
    this.setResourceType()
  }

  protected abstract setResourceType()
}
