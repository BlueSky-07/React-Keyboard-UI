/**
 
 +-----------+-----------+
 |           |           |
 |     L     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    ong    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class L extends Key {
  constructor() {
    super({
      name: 'L',
      type: KeyType.LETTER,
      description: 'L: ong',
      content: {leftTop: 'L', rightBottom: 'ong'},
      actions: {
        self: L
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
