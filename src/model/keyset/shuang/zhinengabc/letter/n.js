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
 |           |     un    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'N: un',
      content: {leftTop: 'N', rightBottom: 'un'},
      actions: {
        self: N
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
