/**
 
 +-----------+-----------+
 |           |           |
 |     R     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     an    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class R extends Key {
  constructor() {
    super({
      name: 'R',
      type: KeyType.LETTER,
      description: 'R: an',
      content: {leftTop: 'R', rightBottom: 'an'},
      actions: {
        self: R
      },
      style: {widthRatio: 1}
    })
  }
}

export default R
