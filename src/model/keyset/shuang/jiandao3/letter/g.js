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
 |           |           |
 |           |    ing    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class G extends Key {
  constructor() {
    super({
      name: 'G',
      type: KeyType.LETTER,
      description: 'G: ing',
      content: {leftTop: 'G', rightBottom: 'ing'},
      actions: {
        self: G
      },
      style: {widthRatio: 1}
    })
  }
}

export default G
