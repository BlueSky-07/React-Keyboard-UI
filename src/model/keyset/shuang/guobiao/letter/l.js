/**
 
 +-----------+-----------+
 |           |           |
 |     L     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     in    |
 |           |     er    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class L extends Key {
  constructor() {
    super({
      name: 'L',
      type: KeyType.LETTER,
      description: 'L: in, er',
      content: {leftTop: 'L', rightBottom: ['in', 'er']},
      actions: {
        self: L
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
