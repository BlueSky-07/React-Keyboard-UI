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
 |           |     ao    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: ao',
      content: {leftTop: 'D', rightBottom: 'ao'},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
