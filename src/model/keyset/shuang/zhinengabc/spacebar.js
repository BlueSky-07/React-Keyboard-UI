/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |        智能ABC        |
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
      description: '智能ABC双拼方案',
      content: {center: '智能ABC'},
      actions: {self: SpaceBar},
      style: {widthRatio: 6}
    })
  }
}

export default SpaceBar
