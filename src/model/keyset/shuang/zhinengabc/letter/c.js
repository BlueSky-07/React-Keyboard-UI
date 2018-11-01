/**
 
 +-----------+-----------+
 |           |           |
 |     C     |           |
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

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LETTER,
      description: 'C: in, uai',
      content: {leftTop: 'C', rightBottom: ['in', 'uai']},
      actions: {
        self: C
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
