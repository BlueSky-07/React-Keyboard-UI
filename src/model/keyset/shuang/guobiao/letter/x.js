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
 |           |           |
 |           |     ve    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'X: ve',
      content: {leftTop: 'X', rightBottom: 've'},
      actions: {
        self: X
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
