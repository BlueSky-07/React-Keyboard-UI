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
 |           |     ia    |
 |           |     ua    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'Q: ia, ua',
      content: {leftTop: 'Q', rightBottom: ['ia', 'ua']},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
