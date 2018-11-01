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
 |           |           |
 |           |     ei    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: ei',
      content: {leftTop: 'W', rightBottom: 'ei'},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
