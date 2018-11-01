/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
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

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'H: iang, uang',
      content: {leftTop: 'H', rightBottom: ['iang', 'uang']},
      actions: {
        self: H
      },
      style: {widthRatio: 1}
    })
  }
}

export default H
