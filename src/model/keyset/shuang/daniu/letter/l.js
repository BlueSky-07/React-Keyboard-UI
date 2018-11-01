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
 |           |    iong   |
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
      description: 'L: iong, ong',
      content: {leftTop: 'L', rightBottom: ['iong', 'ong']},
      actions: {
        self: L
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
