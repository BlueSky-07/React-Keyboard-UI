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
 |           |   uang    |
 |           |    ve     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'X: uang, ve',
      content: {leftTop: 'X', rightBottom: ['uang', 've']},
      actions: {
        self: X
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
