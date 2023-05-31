import { Vector, vec } from 'excalibur';

import { GameObject } from './game-object';
import { Level } from '../services/level';
import { PLACEMENT_TYPE_KEY_BLUE } from '../helpers/consts';
import { TileSetGrid16 } from '../services/resources';
import { TILES } from '../helpers/tiles';

export class BlueKeyPickup extends GameObject {
  constructor(pos: Vector, level: Level, type: string) {
    super({
      pos,
      width: 16,
      height: 16,
      anchor: vec(0, 0),
      level,
      type,
    });
  }

  onInitialize(): void {
    this.graphics.use(this.generateGraphic(TILES.BLUE_KEY, TileSetGrid16));
  }

  addsItemToInventoryOnCollide() {
    return PLACEMENT_TYPE_KEY_BLUE;
  }
}
