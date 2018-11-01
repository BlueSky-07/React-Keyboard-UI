/**
 
 +-----------+-----------+
 |           |           |
 |     B     |           |
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

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'B: ia, ua',
      content: {leftTop: 'B', rightBottom: ['ia', 'ua']},
      actions: {
        self: B
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
