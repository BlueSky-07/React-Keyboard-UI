/**
 
 +-----------+-----------+
 |           |           |
 |     P     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     ou    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class P extends Key {
  constructor() {
    super({
      name: 'P',
      type: KeyType.LETTER,
      description: 'P: ou',
      content: {leftTop: 'P', rightBottom: 'ou'},
      actions: {
        self: P
      },
      style: {widthRatio: 1}
    })
  }
}

export default P
