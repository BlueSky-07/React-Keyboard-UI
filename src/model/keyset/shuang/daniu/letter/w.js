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
 |           |     vn    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: ei, vn',
      content: {leftTop: 'W', rightBottom: ['ei', 'vn']},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
