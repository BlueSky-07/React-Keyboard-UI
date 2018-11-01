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
 |           |    iang   |
 |           |    uang   |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class L extends Key {
  constructor() {
    super({
      name: 'L',
      type: KeyType.LETTER,
      description: 'L: iang, uang',
      content: {leftTop: 'L', rightBottom: ['iang', 'uang']},
      actions: {
        self: L
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
