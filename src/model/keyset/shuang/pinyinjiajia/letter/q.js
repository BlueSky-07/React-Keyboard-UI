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
 |           |     er    |
 |           |    ing    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'Q: er, ing',
      content: {leftTop: 'Q', rightBottom: ['er', 'ing']},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
