'use strict';

import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
  constructor() {
    super('F16', 8, 30, false);
  }
}
