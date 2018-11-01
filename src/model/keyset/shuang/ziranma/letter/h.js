/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    ang    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'H: ang',
      content: {leftTop: 'H', rightBottom: 'ang'},
      actions: {
        self:H
      },
      style: {widthRatio: 1}
    })
  }
}

export default H
