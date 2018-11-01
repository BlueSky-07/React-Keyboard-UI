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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LCTTCR,
      description: 'C',
      content: {leftTop: 'C'},
      actions: {
        self: C
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
