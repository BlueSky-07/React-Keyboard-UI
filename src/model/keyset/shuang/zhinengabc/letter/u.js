/**
 
 +-----------+-----------+
 |           |           |
 |     U     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     u     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class U extends Key {
  constructor() {
    super({
      name: 'U',
      type: KeyType.LETTER,
      description: 'U: u',
      content: {leftTop: 'U', rightBottom: 'u'},
      actions: {
        self: U
      },
      style: {widthRatio: 1}
    })
  }
}

export default U
