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
 |    sh     |     u     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class U extends Key {
  constructor() {
    super({
      name: 'U',
      type: KeyType.LETTER,
      description: 'U: sh, u',
      content: {leftTop: 'U', rightBottom: 'u', leftBottom: 'sh'},
      actions: {
        self:U
      },
      style: {widthRatio: 1}
    })
  }
}

export default U
