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
 |           |           |
 |           |     ei    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'K: ei',
      content: {leftTop: 'K', rightBottom: 'ei'},
      actions: {
        self: K
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
