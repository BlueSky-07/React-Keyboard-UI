/**
 
 +-----------+-----------+
 |           |           |
 |     Y     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     un    |
 |           |     vn    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Y extends Key {
  constructor() {
    super({
      name: 'Y',
      type: KeyType.LETTER,
      description: 'Y: un, vn',
      content: {leftTop: 'Y', rightBottom: ['un', 'vn']},
      actions: {
        self: Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
