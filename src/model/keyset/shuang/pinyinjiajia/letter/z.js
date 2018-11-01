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
 |           |           |
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
      description: 'Z: un',
      content: {leftTop: 'Z', rightBottom: 'un'},
      actions: {
        self: Z
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
