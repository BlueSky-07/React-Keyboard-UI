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
 |           |    iang   |
 |           |    uang   |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class G extends Key {
  constructor() {
    super({
      name: 'G',
      type: KeyType.LETTER,
      description: 'G: iang, uang',
      content: {leftTop: 'G', rightBottom: ['iang', 'uang']},
      actions: {
        self: G
      },
      style: {widthRatio: 1}
    })
  }
}

export default G
