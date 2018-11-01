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
 |           |     ai    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: ai',
      content: {leftTop: 'S', rightBottom: 'ai'},
      actions: {
        self: S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
