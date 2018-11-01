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
 |           |     ie    |
 |           |     ou    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: ie, ou',
      content: {leftTop: 'D', rightBottom: ['ie', 'ou']},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
