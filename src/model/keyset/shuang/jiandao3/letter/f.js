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
 |           |     ai    |
 |    zh     |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class F extends Key {
  constructor() {
    super({
      name: 'F',
      type: KeyType.LETTER,
      description: 'F: zh, ai, ue',
      content: {leftTop: 'F', rightBottom: ['ai', 'ue'], leftBottom: 'zh'},
      actions: {
        self: F
      },
      style: {widthRatio: 1}
    })
  }
}

export default F
