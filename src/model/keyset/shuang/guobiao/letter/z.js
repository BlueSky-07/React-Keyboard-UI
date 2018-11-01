/**
 
 +-----------+-----------+
 |           |           |
 |     Z     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     vn    |
 |           |     un    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Z extends Key {
  constructor() {
    super({
      name: 'Z',
      type: KeyType.LETTER,
      description: 'Z: vn, un',
      content: {leftTop: 'Z', rightBottom: ['vn', 'un']},
      actions: {
        self: Z
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
