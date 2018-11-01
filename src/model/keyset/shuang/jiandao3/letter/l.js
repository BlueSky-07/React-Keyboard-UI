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
 |           |    v o    |
 |           |     uo    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class L extends Key {
  constructor() {
    super({
      name: 'L',
      type: KeyType.LETTER,
      description: 'L: o, uo, v',
      content: {leftTop: 'L', rightBottom: ['v o', 'uo']},
      actions: {
        self: L
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
