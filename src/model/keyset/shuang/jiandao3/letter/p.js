/**
 
 +-----------+-----------+
 |           |           |
 |     P     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     a     |
 |           |     ia    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class P extends Key {
  constructor() {
    super({
      name: 'P',
      type: KeyType.LETTER,
      description: 'P: a, ia',
      content: {leftTop: 'P', rightBottom: ['a', 'ia']},
      actions: {
        self: P
      },
      style: {widthRatio: 1}
    })
  }
}

export default P
