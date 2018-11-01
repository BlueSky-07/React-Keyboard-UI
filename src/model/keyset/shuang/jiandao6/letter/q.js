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
 |           |     iu    |
 |    zh     |     ua    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'Q: zh, iu, ua',
      content: {leftTop: 'Q', rightBottom: ['iu', 'ua'], leftBottom: 'zh'},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
