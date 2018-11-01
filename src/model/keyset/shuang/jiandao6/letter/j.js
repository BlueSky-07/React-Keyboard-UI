/**
 
 +-----------+-----------+
 |           |           |
 |     J     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     u     |
 |    ch     |    er     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'J: ch, u, er',
      content: {leftTop: 'J', rightBottom: ['u', 'er'], leftBottom: 'ch'},
      actions: {
        self: J
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
