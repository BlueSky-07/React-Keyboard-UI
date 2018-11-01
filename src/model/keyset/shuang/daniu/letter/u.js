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
 |           |     u     |
 |    sh     |    er     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class U extends Key {
  constructor() {
    super({
      name: 'U',
      type: KeyType.LETTER,
      description: 'U: sh, u, er',
      content: {leftTop: 'U', rightBottom: ['u', 'er'], leftBottom: 'sh'},
      actions: {
        self: U
      },
      style: {widthRatio: 1}
    })
  }
}

export default U
