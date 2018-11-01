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
 |           |           |
 |           |    ian    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LETTER,
      description: 'C: ian',
      content: {leftTop: 'C', rightBottom: 'ian'},
      actions: {
        self: C
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
