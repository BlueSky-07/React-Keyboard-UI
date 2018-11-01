/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
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

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: ia, ua',
      content: {leftTop: 'D', rightBottom: ['ia', 'ua']},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
