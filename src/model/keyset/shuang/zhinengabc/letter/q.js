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
 |           |     ei    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'Q: ei',
      content: {leftTop: 'Q', rightBottom: 'ei'},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
