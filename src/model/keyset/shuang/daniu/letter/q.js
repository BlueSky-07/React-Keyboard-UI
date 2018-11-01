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
 |           |    ian    |
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
      description: 'Q: ian, ua',
      content: {leftTop: 'Q', rightBottom: ['ian', 'ua']},
      actions: {
        self: Q
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
