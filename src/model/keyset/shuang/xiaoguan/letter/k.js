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
 |           |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'K: ai, ue',
      content: {leftTop: 'K', rightBottom: ['ai', 'ue']},
      actions: {
        self: K
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
