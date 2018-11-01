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
 |           |    van    |
 |           |    uan    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: van, van, uan',
      content: {leftTop: 'W', rightBottom: ['van', 'uan']},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
