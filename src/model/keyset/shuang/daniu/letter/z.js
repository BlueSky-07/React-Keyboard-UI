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
 |           |    uan    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Z extends Key {
  constructor() {
    super({
      name: 'Z',
      type: KeyType.LETTER,
      description: 'Z: uan',
      content: {leftTop: 'Z', rightBottom: 'uan'},
      actions: {
        self: Z
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
