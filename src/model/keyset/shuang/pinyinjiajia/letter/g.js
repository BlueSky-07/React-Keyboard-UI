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
 |           |    ang    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class G extends Key {
  constructor() {
    super({
      name: 'G',
      type: KeyType.LETTER,
      description: 'G: ang',
      content: {leftTop: 'G', rightBottom: 'ang'},
      actions: {
        self: G
      },
      style: {widthRatio: 1}
    })
  }
}

export default G
