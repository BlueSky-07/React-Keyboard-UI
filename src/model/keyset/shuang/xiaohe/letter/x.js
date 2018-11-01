/**
 
 +-----------+-----------+
 |           |           |
 |     X     |           |
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

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'X: ia, ua',
      content: {leftTop: 'X', rightBottom: ['ia', 'ua']},
      actions: {
        self: X
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
