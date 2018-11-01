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
 |           |    ing    |
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
      description: 'Y: ing, uai',
      content: {leftTop: 'Y', rightBottom: ['ing', 'uai']},
      actions: {
        self:Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
