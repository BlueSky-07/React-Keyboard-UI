/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    ang    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: ang',
      content: {leftTop: 'S', rightBottom: 'ang'},
      actions: {
        self: S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
