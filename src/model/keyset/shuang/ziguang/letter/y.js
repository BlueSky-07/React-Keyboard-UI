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
 |           |     in    |
 |           |    uai    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Y extends Key {
  constructor() {
    super({
      name: 'Y',
      type: KeyType.LETTER,
      description: 'Y: in, uai',
      content: {leftTop: 'Y', rightBottom: ['in', 'uai']},
      actions: {
        self: Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
