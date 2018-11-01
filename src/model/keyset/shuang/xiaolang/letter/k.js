/**
 
 +-----------+-----------+
 |           |           |
 |     K     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ai    |
 |           |     ia    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'K: ai, ia',
      content: {leftTop: 'K', rightBottom: ['ai', 'ia']},
      actions: {
        self: K
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
