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
 |           |     iu    |
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
      description: 'Y: iu, uai',
      content: {leftTop: 'Y', rightBottom: ['iu', 'uai']},
      actions: {
        self: Y
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
