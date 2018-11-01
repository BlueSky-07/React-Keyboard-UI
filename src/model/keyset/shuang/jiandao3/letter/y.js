/**
 
 +-----------+-----------+
 |           |           |
 |     Y     |           |
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

class Y extends Key {
  constructor() {
    super({
      name: 'Y',
      type: KeyType.LETTER,
      description: 'Y: iong, ong',
      content: {leftTop: 'Y', rightBottom: ['iong', 'ong']},
      actions: {
        self: Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
