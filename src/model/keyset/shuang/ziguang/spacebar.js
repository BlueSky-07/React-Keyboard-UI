/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |        紫光双拼        |
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
      description: '紫光双拼双拼方案',
      content: {center: '紫光双拼'},
      actions: {self: SpaceBar},
      style: {widthRatio: 6}
    })
  }
}

export default SpaceBar
