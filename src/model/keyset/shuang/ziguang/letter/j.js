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
 |           |     iu    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'J: iu',
      content: {leftTop: 'J', rightBottom: 'iu'},
      actions: {
        self: J
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
