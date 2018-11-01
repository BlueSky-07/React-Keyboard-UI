/**
 
 +-----------+-----------+
 |           |           |
 |     J     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    ch     |     e     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'J: ch, e',
      content: {leftTop: 'J', rightBottom: 'e', leftBottom: 'ch'},
      actions: {
        self: J
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
