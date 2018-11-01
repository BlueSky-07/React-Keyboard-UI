/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
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

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: iang, uang',
      content: {leftTop: 'D', rightBottom: ['iang', 'uang']},
      actions: {
        self:D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
