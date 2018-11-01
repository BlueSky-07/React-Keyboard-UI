/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
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

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: a, ia',
      content: {leftTop: 'S', rightBottom: ['a', 'ia']},
      actions: {
        self: S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
