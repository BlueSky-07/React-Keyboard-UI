/**
 
 +-----------+-----------+
 |           |           |
 |     G     |           |
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

class G extends Key {
  constructor() {
    super({
      name: 'G',
      type: KeyType.LETTER,
      description: 'G: ing, uai',
      content: {leftTop: 'G', rightBottom: ['ing', 'uai']},
      actions: {
        self: G
      },
      style: {widthRatio: 1}
    })
  }
}

export default G
