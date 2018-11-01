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
 |           |    uai    |
 |           |     v     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Y extends Key {
  constructor() {
    super({
      name: 'Y',
      type: KeyType.LETTER,
      description: 'Y: uai, v',
      content: {leftTop: 'Y', rightBottom: ['uai', 'v']},
      actions: {
        self: Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
