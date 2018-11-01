/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
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

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: ai',
      content: {leftTop: 'D', rightBottom: 'ai'},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
