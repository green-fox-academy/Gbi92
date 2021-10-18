'use strict';

import { Aircraft } from './aircraft';

export class F35 extends Aircraft {
  constructor() {
    super('F35', 12, 50);
  }

  public isPriority(): boolean {
    return true;
  }
}
