/**
 
 +-----------+-----------+
 |           |           |
 |     K     |           |
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

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'K: ing, uai',
      content: {leftTop: 'K', rightBottom: ['ing', 'uai']},
      actions: {
        self: K
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
