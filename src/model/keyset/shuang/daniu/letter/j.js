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
 |           |    eng    |
 |           |    van    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'J: eng, van',
      content: {leftTop: 'J', rightBottom: ['eng', 'van']},
      actions: {
        self: J
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
