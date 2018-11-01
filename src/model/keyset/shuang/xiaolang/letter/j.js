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
 |           |     an    |
 |           |    iong   |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'J: an, iong',
      content: {leftTop: 'J', rightBottom: ['an', 'iong']},
      actions: {
        self: J
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
