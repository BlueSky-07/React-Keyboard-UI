/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |       键道双拼6        |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../Key'

class SpaceBar extends Key {
  constructor() {
    super({
      name: 'SpaceBar',
      type: KeyType.FUNCTION,
      description: '键道双拼6双拼方案',
      content: {center: '键道双拼6'},
      actions: {self: SpaceBar},
      style: {widthRatio: 6}
    })
  }
}

export default SpaceBar
