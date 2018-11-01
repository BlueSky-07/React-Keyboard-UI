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
 |           |    iang   |
 |           |    uang   |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'X: iang, uang',
      content: {leftTop: 'X', rightBottom: ['iang', 'uang']},
      actions: {
        self: X
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
