/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |    ing    |
 |           |    uai    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'D: ing, uai',
      content: {leftTop: 'D', rightBottom: ['ing', 'uai']},
      actions: {
        self: D
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
