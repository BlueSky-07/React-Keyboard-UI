/**
 
 +-----------+-----------+
 |           |           |
 |     E     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    sh     |     an    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class E extends Key {
  constructor() {
    super({
      name: 'E',
      type: KeyType.LETTER,
      description: 'E: sh, an',
      content: {leftTop: 'E', rightBottom: 'an', leftBottom: 'sh'},
      actions: {
        self: E
      },
      style: {widthRatio: 1}
    })
  }
}

export default E
