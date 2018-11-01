/**
 
 +-----------+-----------+
 |           |           |
 |     N     |           |
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

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'N: in',
      content: {leftTop: 'N', rightBottom: 'in'},
      actions: {
        self: N
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
