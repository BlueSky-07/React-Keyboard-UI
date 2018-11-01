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
 |           |           |
 |           |     in    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'B: in',
      content: {leftTop: 'B', rightBottom: 'in'},
      actions: {
        self: B
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
