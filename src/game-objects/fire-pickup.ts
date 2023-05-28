import { Actor, CollisionType, Sprite, SpriteSheet, Vector, vec } from 'excalibur';
import { Resources, TileSetGrid16 } from '../services/resources';
import { TILES } from '../helpers/tiles';
import { PLACEMENT_TYPE_FIRE_PICKUP } from '../helpers/consts';
import { Level } from '../services/level';

export class FirePickup extends Actor {
  level: Level;

  constructor(pos: Vector, level: Level) {
    super({
      pos,
      width: 16,
      height: 16,
      anchor: vec(0, 0),
      collisionType: CollisionType.Passive,
    });
    this.level = level;
  }

  onInitialize(): void {
    const spriteSheet = SpriteSheet.fromImageSource({
      image: Resources.TileSet,
      grid: TileSetGrid16,
    });

    this.graphics.use(spriteSheet.getSprite(TILES.FIRE_PICKUP[0], TILES.FIRE_PICKUP[1]) as Sprite);
  }

  addsItemToInventoryOnCollide() {
    return PLACEMENT_TYPE_FIRE_PICKUP;
  }

  collect() {
    this.active = false;
    this.level.inventory.add(this.addsItemToInventoryOnCollide());
  }
}
