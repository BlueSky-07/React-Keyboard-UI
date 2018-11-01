/**
 
 +-----------+-----------+
 |           |           |
 |     Q     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    zh     |    iao    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'Q: zh, iao',
      content: {leftTop: 'Q', rightBottom: 'iao', leftBottom: 'zh'},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
