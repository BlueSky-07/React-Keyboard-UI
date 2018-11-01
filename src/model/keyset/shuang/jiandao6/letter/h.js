/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ai    |
 |           |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'H: ai, ue',
      content: {leftTop: 'H', rightBottom: ['ai', 'ue']},
      actions: {
        self: H
      },
      style: {widthRatio: 1}
    })
  }
}

export default H
