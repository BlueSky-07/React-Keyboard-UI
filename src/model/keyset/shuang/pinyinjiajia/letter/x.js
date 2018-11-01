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
 |           |    uai    |
 |           |     ue    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'X: uai, ue',
      content: {leftTop: 'X', rightBottom: ['uai', 'ue']},
      actions: {
        self: X
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
