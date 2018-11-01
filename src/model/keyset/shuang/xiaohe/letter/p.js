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
 |           |     ie    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class P extends Key {
  constructor() {
    super({
      name: 'P',
      type: KeyType.LETTER,
      description: 'P: ie',
      content: {leftTop: 'P', rightBottom: 'ie'},
      actions: {
        self: P
      },
      style: {widthRatio: 1}
    })
  }
}

export default P
