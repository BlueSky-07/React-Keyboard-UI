/**
 
 +-----------+-----------+
 |           |           |
 |     W     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     ei    |
 |    ch     |     un    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: ch, ei, un',
      content: {leftTop: 'W', rightBottom: ['ei', 'un'], leftBottom: 'ch'},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
