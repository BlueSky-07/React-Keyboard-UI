/**
 
 +-----------+-----------+
 |           |           |
 |     F     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    zh     |     an    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class F extends Key {
  constructor() {
    super({
      name: 'F',
      type: KeyType.LETTER,
      description: 'F: zh, an',
      content: {leftTop: 'F', rightBottom: 'an', leftBottom: 'zh'},
      actions: {
        self: F
      },
      style: {widthRatio: 1}
    })
  }
}

export default F
