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
 |           |     en    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'W: en',
      content: {leftTop: 'W', rightBottom: 'en'},
      actions: {
        self: W
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
