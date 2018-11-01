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
 |           |     ei    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Z extends Key {
  constructor() {
    super({
      name: 'Z',
      type: KeyType.LETTER,
      description: 'Z: ei',
      content: {leftTop: 'Z', rightBottom: 'ei'},
      actions: {
        self: Z
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
